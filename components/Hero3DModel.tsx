"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { Group, MathUtils } from "three";

type Hero3DModelProps = {
  modelPath?: string;
  className?: string;
};

type CameraRigProps = {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  targetDistance: number;
  autoRotate: boolean;
};

function Model({ modelPath }: { modelPath: string }) {
  const gltf = useGLTF(modelPath);
  const scene = useMemo(() => gltf.scene.clone(), [gltf.scene]);

  return <primitive object={scene as Group} scale={1.02} position={[0, -0.82, 0]} />;
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function CameraRig({ controlsRef, targetDistance, autoRotate }: CameraRigProps) {
  useFrame(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const currentDistance = controls.getDistance();
    const nextDistance = MathUtils.lerp(currentDistance, targetDistance, 0.12);
    const ratio = nextDistance / currentDistance;

    controls.object.position.sub(controls.target).multiplyScalar(ratio).add(controls.target);
    controls.autoRotate = autoRotate;
    controls.update();
  });

  return null;
}

export function Hero3DModel({
  modelPath = "/models/hello.glb",
  className,
}: Hero3DModelProps) {
  const [canRender3D, setCanRender3D] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [targetDistance, setTargetDistance] = useState(3.6);
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setCanRender3D(supportsWebGL());
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const MIN_DISTANCE = 2.8;
  const MAX_DISTANCE = 5.2;

  const zoomIn = () => {
    setTargetDistance((distance) =>
      Math.max(MIN_DISTANCE, Number((distance - 0.35).toFixed(2))),
    );
  };

  const zoomOut = () => {
    setTargetDistance((distance) =>
      Math.min(MAX_DISTANCE, Number((distance + 0.35).toFixed(2))),
    );
  };

  if (!canRender3D) {
    return (
      <div
        role="img"
        aria-label="3D model placeholder"
        className={`w-full rounded-[24px] border p-8 text-center ${className ?? ""}`}
        style={{ background: "var(--bg-surface)", borderColor: "var(--border-default)" }}
      >
        <p style={{ color: "var(--text-secondary)" }}>3D model loading...</p>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Interactive 3D hero model. Drag to rotate."
      className={`relative w-full overflow-hidden rounded-[20px] border sm:rounded-[28px] ${className ?? ""}`}
      style={{
        background: "color-mix(in oklab, var(--bg-surface) 90%, transparent)",
        borderColor: "var(--border-default)",
      }}
    >
      <div className="absolute right-2 top-2 z-10 sm:right-3 sm:top-3">
        <div
          className="flex items-center gap-1 rounded-full border p-0.5 backdrop-blur-md sm:gap-2 sm:p-1"
          style={{
            background: "color-mix(in oklab, var(--bg-surface) 75%, transparent)",
            borderColor: "color-mix(in oklab, var(--border-default) 80%, transparent)",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
          }}
        >
          <button
            type="button"
            aria-label="Zoom in model"
            onClick={zoomIn}
            className="flex h-11 min-h-11 w-11 min-w-11 touch-manipulation items-center justify-center rounded-full text-[18px] font-medium transition-all hover:scale-105 hover:opacity-85 sm:h-8 sm:min-h-0 sm:w-8 sm:min-w-0"
            style={{ color: "var(--text-primary)" }}
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out model"
            onClick={zoomOut}
            className="flex h-11 min-h-11 w-11 min-w-11 touch-manipulation items-center justify-center rounded-full text-[20px] font-medium transition-all hover:scale-105 hover:opacity-85 sm:h-8 sm:min-h-0 sm:w-8 sm:min-w-0"
            style={{ color: "var(--text-primary)" }}
          >
            −
          </button>
          <button
            type="button"
            aria-label={autoRotate ? "Disable model auto rotate" : "Enable model auto rotate"}
            onClick={() => setAutoRotate((value) => !value)}
            className="flex h-11 min-h-11 w-11 min-w-11 touch-manipulation items-center justify-center rounded-full transition-all hover:scale-105 hover:opacity-85 sm:h-8 sm:min-h-0 sm:w-8 sm:min-w-0"
            style={{
              background: autoRotate
                ? "color-mix(in oklab, var(--text-primary) 12%, transparent)"
                : "transparent",
              color: "var(--text-primary)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mx-auto">
              <path
                d="M21 12A9 9 0 1 1 17.65 5.05M21 4V10H15"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-[clamp(12.5rem,36vmin+5rem,17.5rem)] w-full sm:h-[260px] md:h-[290px]">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.75, 3.6], fov: 44 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 6, 4]} intensity={1.2} />
          <directionalLight position={[-3, 2, -2]} intensity={0.45} />

          <Suspense fallback={null}>
            <Model modelPath={modelPath} />
          </Suspense>

          <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableZoom
            minDistance={MIN_DISTANCE}
            maxDistance={MAX_DISTANCE}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(Math.PI * 2) / 3}
            autoRotate={autoRotate}
            autoRotateSpeed={0.75}
            target={[0, -0.35, 0]}
            enableDamping
            dampingFactor={0.08}
          />
          <CameraRig
            controlsRef={controlsRef}
            targetDistance={targetDistance}
            autoRotate={autoRotate}
          />
        </Canvas>
      </div>
      <p className="px-3 pb-3 text-[11px] text-center sm:px-4 sm:pb-4 sm:text-[12px]" style={{ color: "var(--text-muted)" }}>
        Drag to spin
      </p>
    </div>
  );
}

useGLTF.preload("/models/hello.glb");
