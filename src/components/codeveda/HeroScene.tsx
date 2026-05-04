import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Premium 3D hero — slow rotating wireframe icosahedron with orbiting particles
 * and a soft additive glow. Mouse-parallax, theme-aware.
 */
export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 26;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        primary: isDark ? new THREE.Color("#a78bfa") : new THREE.Color("#7c3aed"),
        accent: isDark ? new THREE.Color("#f0abfc") : new THREE.Color("#c026d3"),
      };
    };
    let { primary, accent } = getThemeColors();

    // Wireframe icosahedron — the centerpiece
    const icoGeom = new THREE.IcosahedronGeometry(8, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: primary, wireframe: true, transparent: true, opacity: 0.55,
    });
    const ico = new THREE.Mesh(icoGeom, icoMat);
    scene.add(ico);

    // Inner solid sphere (subtle dark core)
    const coreGeom = new THREE.IcosahedronGeometry(5.5, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: accent, wireframe: true, transparent: true, opacity: 0.18,
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

    const mouse = new THREE.Vector2(0, 0);
    const targetRot = new THREE.Vector2(0, 0);

    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRot.x = mouse.y * 0.4;
      targetRot.y = mouse.x * 0.4;
    };
    window.addEventListener("mousemove", onMove);

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
      core.rotation.x = -t * 0.1;
      core.rotation.z = t * 0.18;
      points.rotation.y = t * 0.05;

      scene.rotation.y += (targetRot.y - scene.rotation.y) * 0.04;
      scene.rotation.x += (targetRot.x - scene.rotation.x) * 0.04;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      icoGeom.dispose(); icoMat.dispose();
      coreGeom.dispose(); coreMat.dispose();
      pGeom.dispose(); pMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}