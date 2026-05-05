import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Premium 3D hero — wireframe icosahedron + lit inner crystal with orbiting
 * particles. Smooth mouse parallax, drag-to-rotate, scroll-zoom, theme-aware.
 */
export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 26;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        primary: isDark ? new THREE.Color("#a78bfa") : new THREE.Color("#7c3aed"),
        accent: isDark ? new THREE.Color("#f0abfc") : new THREE.Color("#c026d3"),
      };
    };
    let { primary, accent } = getThemeColors();

    // ===== Lighting =====
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);
    const keyLight = new THREE.PointLight(primary.getHex(), 2.4, 80, 1.6);
    keyLight.position.set(-12, 10, 14);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(accent.getHex(), 1.8, 80, 1.6);
    rimLight.position.set(14, -8, 12);
    scene.add(rimLight);

    // Wireframe icosahedron — the centerpiece
    const icoGeom = new THREE.IcosahedronGeometry(8, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: primary, wireframe: true, transparent: true, opacity: 0.55,
    });
    const ico = new THREE.Mesh(icoGeom, icoMat);
    scene.add(ico);

    // Inner lit crystal core
    const coreGeom = new THREE.IcosahedronGeometry(5.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: accent,
      metalness: 0.6,
      roughness: 0.25,
      transparent: true,
      opacity: 0.85,
      flatShading: true,
      emissive: primary,
      emissiveIntensity: 0.15,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    // Orbiting particles
    const COUNT = 800;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      const r = 10 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = Math.random() > 0.5 ? primary : accent;
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      sizes[i] = 0.04 + Math.random() * 0.12;
    }
    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.08, vertexColors: true, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, sizeAttenuation: true, depthWrite: false,
    });
    const points = new THREE.Points(pGeom, pMat);
    scene.add(points);

    // ===== Interaction state =====
    const mouse = new THREE.Vector2(0, 0);
    const targetRot = new THREE.Vector2(0, 0);
    const dragRot = new THREE.Vector2(0, 0);
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let targetZ = 26;

    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRot.x = mouse.y * 0.35;
      targetRot.y = mouse.x * 0.35;

      if (isDragging) {
        dragRot.y += (e.clientX - lastX) * 0.005;
        dragRot.x += (e.clientY - lastY) * 0.005;
        lastX = e.clientX; lastY = e.clientY;
      }
    };
    const onDown = (e: PointerEvent) => {
      isDragging = true; lastX = e.clientX; lastY = e.clientY;
      mount.style.cursor = "grabbing";
    };
    const onUp = () => { isDragging = false; mount.style.cursor = "grab"; };
    const onWheel = (e: WheelEvent) => {
      targetZ = THREE.MathUtils.clamp(targetZ + e.deltaY * 0.01, 18, 40);
    };
    window.addEventListener("mousemove", onMove);
    mount.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    mount.addEventListener("wheel", onWheel, { passive: true });
    mount.style.pointerEvents = "auto";
    mount.style.cursor = "grab";

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const themeObserver = new MutationObserver(() => {
      const c = getThemeColors();
      primary = c.primary; accent = c.accent;
      icoMat.color = primary;
      coreMat.color = accent;
      coreMat.emissive = primary;
      keyLight.color = primary;
      rimLight.color = accent;
      const colArr = pGeom.getAttribute("color") as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        const col = i % 2 === 0 ? primary : accent;
        colArr.setXYZ(i, col.r, col.g, col.b);
      }
      colArr.needsUpdate = true;
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let rafId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      ico.rotation.x = t * 0.15;
      ico.rotation.y = t * 0.2;
      core.rotation.x = -t * 0.12 + Math.sin(t * 0.5) * 0.1;
      core.rotation.z = t * 0.18;
      points.rotation.y = t * 0.05;

      // Pulsing emissive
      coreMat.emissiveIntensity = 0.15 + Math.sin(t * 1.5) * 0.1;

      // Smoothed combined rotation (parallax + drag)
      scene.rotation.y += ((targetRot.y + dragRot.y) - scene.rotation.y) * 0.06;
      scene.rotation.x += ((targetRot.x + dragRot.x) - scene.rotation.x) * 0.06;

      // Smooth zoom
      camera.position.z += (targetZ - camera.position.z) * 0.08;

      // Orbiting lights
      keyLight.position.x = Math.cos(t * 0.6) * 14;
      keyLight.position.z = Math.sin(t * 0.6) * 14;
      rimLight.position.x = Math.cos(t * 0.4 + Math.PI) * 12;
      rimLight.position.y = Math.sin(t * 0.4 + Math.PI) * 10;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      mount.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      mount.removeEventListener("wheel", onWheel);
      themeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      icoGeom.dispose(); icoMat.dispose();
      coreGeom.dispose(); coreMat.dispose();
      pGeom.dispose(); pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden="true" />;
}