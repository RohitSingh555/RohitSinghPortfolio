import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', motionListener);

    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch (e) {
      setWebGLSupported(false);
      return;
    }

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    // Dynamic camera framing: pull back slightly on narrow mobile viewports
    const initialZ = width < 480 ? 8.8 : width < 768 ? 8.0 : 7.4;
    camera.position.set(0, 0, initialZ);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn('WebGL init failed, falling back to 2D vector fallback', err);
      setWebGLSupported(false);
      return;
    }

    // Lighting: Sophisticated studio setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x94A3B8, 1.0);
    fillLight.position.set(-6, -3, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x2563EB, 0.8);
    rimLight.position.set(0, -6, 6);
    scene.add(rimLight);

    // Architectural Group: Kinetic Monochromatic Sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // Materials: Architectural graphite, brushed steel, frosted translucent glass
    const graphiteMaterial = new THREE.MeshStandardMaterial({
      color: 0x1E232E,
      metalness: 0.85,
      roughness: 0.25,
    });

    const silverMaterial = new THREE.MeshStandardMaterial({
      color: 0xE2E8F0,
      metalness: 0.95,
      roughness: 0.18,
    });

    const subtleAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563EB,
      metalness: 0.6,
      roughness: 0.3,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x94A3B8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF8FAFC,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.6,
      transparent: true,
      opacity: 0.65,
    });

    // 1. Outer Torus Ring
    const outerRingGeo = new THREE.TorusGeometry(2.3, 0.045, 32, 100);
    const outerRing = new THREE.Mesh(outerRingGeo, silverMaterial);
    outerRing.rotation.x = Math.PI / 4;
    sculptureGroup.add(outerRing);

    // 2. Middle Intersecting Ring
    const midRingGeo = new THREE.TorusGeometry(1.85, 0.05, 32, 100);
    const midRing = new THREE.Mesh(midRingGeo, graphiteMaterial);
    midRing.rotation.y = Math.PI / 3;
    midRing.rotation.x = Math.PI / 6;
    sculptureGroup.add(midRing);

    // 3. Inner Equatorial Accent Ring
    const innerRingGeo = new THREE.TorusGeometry(1.4, 0.035, 24, 80);
    const innerRing = new THREE.Mesh(innerRingGeo, subtleAccentMaterial);
    innerRing.rotation.z = Math.PI / 3;
    sculptureGroup.add(innerRing);

    // 4. Central Geometric Polyhedron
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMesh = new THREE.Mesh(coreGeo, glassMaterial);
    sculptureGroup.add(coreMesh);

    // 5. Surrounding Geometric Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const cageMesh = new THREE.Mesh(cageGeo, wireframeMaterial);
    sculptureGroup.add(cageMesh);

    // 6. Central Dense Sphere
    const kernelGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const kernelMesh = new THREE.Mesh(kernelGeo, graphiteMaterial);
    sculptureGroup.add(kernelMesh);

    // 7. Satellite Nodes
    const satelliteCount = 3;
    const satellites: THREE.Mesh[] = [];
    for (let i = 0; i < satelliteCount; i++) {
      const satGeo = new THREE.OctahedronGeometry(0.09, 0);
      const satMesh = new THREE.Mesh(satGeo, silverMaterial);
      sculptureGroup.add(satMesh);
      satellites.push(satMesh);
    }

    // Pointer & Touch Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const updateCoordinates = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    const onMouseMove = (e: MouseEvent) => {
      updateCoordinates(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchmove', onTouchMove, { passive: true });

    // Scroll-driven tilt
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY / window.innerHeight;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // Responsive Resize Handler
    const onResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.position.z = w < 480 ? 8.8 : w < 768 ? 8.0 : 7.4;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Inertial smoothing (Lerp)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        outerRing.rotation.z += 0.003;
        outerRing.rotation.x = Math.PI / 4 + mouseY * 0.4 + scrollY * 0.5;

        midRing.rotation.y += 0.005;
        midRing.rotation.z = Math.PI / 6 + mouseX * 0.4;

        innerRing.rotation.x += 0.007;
        innerRing.rotation.y += 0.004;

        coreMesh.rotation.y -= 0.004;
        coreMesh.rotation.x += 0.002;

        cageMesh.rotation.y += 0.002;
        cageMesh.rotation.z -= 0.003;

        satellites.forEach((sat, idx) => {
          const orbitRadius = 1.6 + idx * 0.3;
          const speed = (idx + 1) * 0.4;
          const offset = (idx * Math.PI * 2) / satelliteCount;
          sat.position.x = Math.cos(time * speed + offset) * orbitRadius;
          sat.position.y = Math.sin(time * speed + offset) * 0.6;
          sat.position.z = Math.sin(time * speed + offset) * orbitRadius;
          sat.rotation.x += 0.02;
          sat.rotation.y += 0.02;
        });

        sculptureGroup.position.y = Math.sin(time * 0.8) * 0.08;
        sculptureGroup.rotation.y = mouseX * 0.6 + time * 0.05;
        sculptureGroup.rotation.x = mouseY * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', motionListener);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      outerRingGeo.dispose();
      midRingGeo.dispose();
      innerRingGeo.dispose();
      coreGeo.dispose();
      cageGeo.dispose();
      kernelGeo.dispose();

      graphiteMaterial.dispose();
      silverMaterial.dispose();
      subtleAccentMaterial.dispose();
      wireframeMaterial.dispose();
      glassMaterial.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  if (!webGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-slate-300 flex items-center justify-center animate-spin-slow">
          <div className="absolute inset-4 rounded-full border border-dashed border-slate-400"></div>
          <div className="absolute inset-10 rounded-full border border-graphite-800/40"></div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rotate-45 border-2 border-accent-blue/80 flex items-center justify-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-graphite-950"></div>
          </div>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-blue"></div>
          <div className="absolute bottom-4 right-10 w-2 h-2 rounded-full bg-graphite-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[260px] sm:min-h-[400px] lg:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing relative overflow-hidden"
      aria-label="Interactive 3D Kinetic Architectural Sculpture"
    />
  );
};
