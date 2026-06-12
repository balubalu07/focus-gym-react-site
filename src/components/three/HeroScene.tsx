import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Full-bleed Three.js backdrop for the hero:
 * a slowly rotating chrome dumbbell lit by a crimson rim light,
 * floating inside a drifting particle field. Reacts to the cursor
 * with soft parallax. Pauses offscreen and respects reduced motion.
 */
const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.07);

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.4, 9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // --- Lights ---------------------------------------------------------
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(4, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe02b3d, 6);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x6e1423, 14, 30);
    fillLight.position.set(0, -3, 4);
    scene.add(fillLight);

    scene.add(new THREE.AmbientLight(0x1a1a20, 2.4));

    // --- Dumbbell -------------------------------------------------------
    const dumbbell = new THREE.Group();

    const steel = new THREE.MeshStandardMaterial({
      color: 0x9a9aa2,
      metalness: 0.95,
      roughness: 0.28,
    });
    const iron = new THREE.MeshStandardMaterial({
      color: 0x17171b,
      metalness: 0.7,
      roughness: 0.45,
    });
    const crimson = new THREE.MeshStandardMaterial({
      color: 0x6e1423,
      metalness: 0.5,
      roughness: 0.35,
    });

    const bar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.13, 5.4, 48),
      steel
    );
    bar.rotation.z = Math.PI / 2;
    dumbbell.add(bar);

    // grip knurling hints
    [-0.55, 0, 0.55].forEach((x) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.135, 0.018, 16, 48),
        iron
      );
      ring.position.x = x;
      ring.rotation.y = Math.PI / 2;
      dumbbell.add(ring);
    });

    // weight plates, mirrored
    const plateSpecs = [
      { r: 1.05, w: 0.34, x: 1.95, mat: iron },
      { r: 0.82, w: 0.3, x: 2.3, mat: crimson },
      { r: 0.58, w: 0.26, x: 2.6, mat: iron },
    ];
    plateSpecs.forEach(({ r, w, x, mat }) => {
      [-1, 1].forEach((side) => {
        const plate = new THREE.Mesh(
          new THREE.CylinderGeometry(r, r, w, 64),
          mat
        );
        plate.rotation.z = Math.PI / 2;
        plate.position.x = side * x;
        dumbbell.add(plate);
      });
    });

    // collars
    [-1, 1].forEach((side) => {
      const collar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.21, 0.21, 0.22, 32),
        steel
      );
      collar.rotation.z = Math.PI / 2;
      collar.position.x = side * 1.62;
      dumbbell.add(collar);
    });

    dumbbell.rotation.set(0.35, -0.5, -0.12);
    scene.add(dumbbell);

    // --- Particle field ---------------------------------------------------
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xb8404f,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Interaction / loop ----------------------------------------------
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(mount);

    const startTime = performance.now();
    let frameId = 0;

    const renderFrame = () => {
      const t = (performance.now() - startTime) / 1000;

      dumbbell.rotation.y = -0.5 + t * 0.18;
      dumbbell.rotation.x = 0.35 + Math.sin(t * 0.4) * 0.08;
      dumbbell.position.y = Math.sin(t * 0.7) * 0.18;

      particles.rotation.y = t * 0.012;

      camera.position.x += (pointer.x * 0.9 - camera.position.x) * 0.04;
      camera.position.y +=
        (0.4 + pointer.y * -0.5 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (visible) renderFrame();
    };

    if (prefersReducedMotion) {
      renderFrame();
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          (Array.isArray(obj.material)
            ? obj.material
            : [obj.material]
          ).forEach((m) => m.dispose());
        }
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default HeroScene;
