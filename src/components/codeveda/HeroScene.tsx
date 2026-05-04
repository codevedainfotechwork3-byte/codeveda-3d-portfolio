import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive 3D particle network — mouse-reactive, theme-aware.
 * Pure three.js (no R3F) for a tiny, fast, premium hero scene.
 */
export function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        primary: isDark ? new THREE.Color("#5dd4ff") : new THREE.Color("#0891b2"),
        accent: isDark ? new THREE.Color("#c084fc") : new THREE.Color("#8b5cf6"),
      };
    };

    // Particles
    const COUNT = 140;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const velocities: THREE.Vector3[] = [];
    let { primary, accent } = getThemeColors();

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      const c = Math.random() > 0.5 ? primary : accent;
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04,
        (Math.random() - 0.5) * 0.04
      ));
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.6, vertexColors: true, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeom, pMat);
    scene.add(points);

    // Lines between near particles
    const lineGeom = new THREE.BufferGeometry();
    const linePositions = new Float32Array(COUNT * COUNT * 6);
    const lineColors = new Float32Array(COUNT * COUNT * 6);
    lineGeom.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeom.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    // Central torus
    const torusGeom = new THREE.TorusKnotGeometry(8, 1.6, 180, 24);
    const torusMat = new THREE.MeshBasicMaterial({
      color: primary, wireframe: true, transparent: true, opacity: 0.35,
    });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    scene.add(torus);

    const mouse = new THREE.Vector2(0, 0);
    const targetRot = new THREE.Vector2(0, 0);

    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRot.x = mouse.y * 0.3;
      targetRot.y = mouse.x * 0.3;
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
      const colArr = pGeom.getAttribute("color") as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        const col = i % 2 === 0 ? primary : accent;
        colArr.setXYZ(i, col.r, col.g, col.b);
      }
      colArr.needsUpdate = true;
      torusMat.color = primary;
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      const posAttr = pGeom.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        let x = posAttr.getX(i) + velocities[i].x;
        let y = posAttr.getY(i) + velocities[i].y;
        let z = posAttr.getZ(i) + velocities[i].z;
        if (Math.abs(x) > 50) velocities[i].x *= -1;
        if (Math.abs(y) > 30) velocities[i].y *= -1;
        if (Math.abs(z) > 30) velocities[i].z *= -1;
        posAttr.setXYZ(i, x, y, z);
      }
      posAttr.needsUpdate = true;

      // Update lines
      let idx = 0;
      const maxDist = 12;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = posAttr.getX(i) - posAttr.getX(j);
          const dy = posAttr.getY(i) - posAttr.getY(j);
          const dz = posAttr.getZ(i) - posAttr.getZ(j);
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < maxDist) {
            linePositions[idx] = posAttr.getX(i);
            linePositions[idx + 1] = posAttr.getY(i);
            linePositions[idx + 2] = posAttr.getZ(i);
            linePositions[idx + 3] = posAttr.getX(j);
            linePositions[idx + 4] = posAttr.getY(j);
            linePositions[idx + 5] = posAttr.getZ(j);
            const c = primary;
            lineColors[idx] = c.r; lineColors[idx + 1] = c.g; lineColors[idx + 2] = c.b;
            lineColors[idx + 3] = c.r; lineColors[idx + 4] = c.g; lineColors[idx + 5] = c.b;
            idx += 6;
          }
        }
      }
      lineGeom.setDrawRange(0, idx / 3);
      (lineGeom.getAttribute("position") as THREE.BufferAttribute).needsUpdate = true;
      (lineGeom.getAttribute("color") as THREE.BufferAttribute).needsUpdate = true;

      torus.rotation.x += 0.003;
      torus.rotation.y += 0.005;

      points.rotation.y += (targetRot.y - points.rotation.y) * 0.04;
      points.rotation.x += (targetRot.x - points.rotation.x) * 0.04;
      lines.rotation.copy(points.rotation);
      torus.rotation.z += (targetRot.x - torus.rotation.z) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      pGeom.dispose(); pMat.dispose();
      lineGeom.dispose(); lineMat.dispose();
      torusGeom.dispose(); torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-0" aria-hidden="true" />;
}