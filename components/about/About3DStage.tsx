"use client";

import {
  Suspense,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type RefObject,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { MathUtils } from "three";
import type { AboutPose } from "@/components/about/aboutModelUrls";
import { ABOUT_MODEL_URL } from "@/components/about/aboutModelUrls";

const MIN_DISTANCE = 0.85;
const MAX_DISTANCE = 5.5;
const FADE_SPEED = 2.75;

/** World scale — CameraRig also enforces a min distance from bbox so the full figure stays in frame. */
const MODEL_CLONE_SCALE = 1.92;

const CAMERA_INITIAL: [number, number, number] = [0, 0.38, 2.72];

const INITIAL_ORBIT_TARGET: [number, number, number] = [0, -0.38, 0];

/** Wider FOV helps fit head-to-toe without clipping on portrait viewports. */
const CAMERA_FOV = 44;

/** Subtle Y bias on orbit target after bbox centering (keeps a little headroom). */
const FRAMING_TARGET_Y_BIAS = 0.028;

/** Default zoom; never closer than auto-fit distance computed from mesh bounds. */
const INITIAL_TARGET_DISTANCE = 1.78;

/** Extra padding around AABB when computing minimum camera distance (full model + safe margin). */
const FIT_MARGIN = 0.32;

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

function setGroupOpacity(root: THREE.Object3D | null, opacity: number) {
  if (!root) return;
  const clamped = MathUtils.clamp(opacity, 0, 1);
  root.visible = clamped > 0.002;
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of materials) {
      const m = mat as THREE.MeshStandardMaterial;
      if (m && "opacity" in m) {
        m.transparent = clamped < 0.998;
        m.opacity = clamped;
        m.depthWrite = clamped > 0.92;
      }
    }
  });
}

/**
 * Keeps the camera at least far enough that the mesh AABB fits in the perspective frustum
 * (head–toe visibility, including while auto-rotating).
 */
function CameraRig({
  controlsRef,
  targetDistance,
  autoRotate,
  meshRootRef,
}: {
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
  targetDistance: number;
  autoRotate: boolean;
  meshRootRef: RefObject<THREE.Group | null>;
}) {
  const { camera } = useThree();
  const box = useMemo(() => new THREE.Box3(), []);
  const size = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const controls = controlsRef.current;
    const root = meshRootRef.current;
    if (!controls || !root || !(camera instanceof THREE.PerspectiveCamera)) return;

    let minDistForFit = 0;
    box.setFromObject(root);
    if (!box.isEmpty()) {
      box.getSize(size);
      const vFovRad = MathUtils.degToRad(camera.fov);
      const halfH = (size.y * FIT_MARGIN) / 2;
      const distForHeight = halfH / Math.tan(vFovRad / 2);
      const aspect = Math.max(camera.aspect, 0.001);
      const hFovRad = 2 * Math.atan(Math.tan(vFovRad / 2) * aspect);
      const halfW = (Math.max(size.x, size.z) * FIT_MARGIN) / 2;
      const distForWidth = halfW / Math.tan(hFovRad / 2);
      minDistForFit = Math.max(distForHeight, distForWidth);
    }

    const effectiveTarget = Math.max(targetDistance, minDistForFit, MIN_DISTANCE);
    controls.minDistance = Math.max(MIN_DISTANCE, minDistForFit * 0.96);

    const currentDistance = controls.getDistance();
    const nextDistance = MathUtils.lerp(currentDistance, effectiveTarget, 0.12);
    const ratio = nextDistance / Math.max(currentDistance, 0.0001);
    controls.object.position.sub(controls.target).multiplyScalar(ratio).add(controls.target);
    controls.autoRotate = autoRotate;
    controls.update();
  });
  return null;
}

/** Keeps OrbitControls.target on the true AABB center of the base pose mesh (bbox-based, not file pivot). */
function BboxOrbitTarget({
  controlsRef,
  meshRootRef,
}: {
  controlsRef: RefObject<OrbitControlsImpl | null>;
  meshRootRef: RefObject<THREE.Group | null>;
}) {
  const box = useMemo(() => new THREE.Box3(), []);
  const center = useMemo(() => new THREE.Vector3(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const delta = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const ctrl = controlsRef.current;
    const root = meshRootRef.current;
    if (!ctrl || !root) return;
    box.setFromObject(root);
    if (box.isEmpty()) return;
    box.getCenter(center);
    target.set(center.x, center.y + FRAMING_TARGET_Y_BIAS, center.z);
    delta.copy(ctrl.target).sub(target);
    if (delta.lengthSq() > 1e-10) {
      ctrl.target.copy(target);
      ctrl.update();
    }
  });
  return null;
}

function LoadedCharacter({
  pose,
  onLoaded,
  cloneScale = MODEL_CLONE_SCALE,
}: {
  pose: AboutPose;
  onLoaded?: () => void;
  cloneScale?: number;
}) {
  const gltf = useGLTF(ABOUT_MODEL_URL[pose]);
  const root = useMemo(() => {
    const g = gltf.scene.clone(true) as THREE.Object3D;
    g.scale.setScalar(cloneScale);
    return g;
  }, [gltf.scene, cloneScale]);

  useEffect(() => {
    onLoaded?.();
  }, [onLoaded, pose]);

  return (
    <Center precise cacheKey={pose}>
      <primitive object={root} />
    </Center>
  );
}

function CrossfadeScene({
  basePose,
  overlayPose,
  onFadeCompleteRef,
  controlsRef,
  meshRootRef,
}: {
  basePose: AboutPose;
  overlayPose: AboutPose | null;
  onFadeCompleteRef: MutableRefObject<() => void>;
  controlsRef: RefObject<OrbitControlsImpl | null>;
  meshRootRef: RefObject<THREE.Group | null>;
}) {
  const wrapB = useRef<THREE.Group>(null);
  const blend = useRef(0);
  const phase = useRef<"idle" | "fading">("idle");
  const overlayReady = useRef(false);
  const firedComplete = useRef(false);

  useEffect(() => {
    if (overlayPose) {
      blend.current = 0;
      phase.current = "fading";
      overlayReady.current = false;
      firedComplete.current = false;
    } else {
      phase.current = "idle";
      blend.current = 0;
      overlayReady.current = false;
      firedComplete.current = false;
      if (meshRootRef.current) setGroupOpacity(meshRootRef.current, 1);
      if (wrapB.current) setGroupOpacity(wrapB.current, 0);
    }
  }, [overlayPose, meshRootRef]);

  const handleOverlayLoaded = useCallback(() => {
    overlayReady.current = true;
    if (wrapB.current) setGroupOpacity(wrapB.current, 0);
    if (meshRootRef.current) setGroupOpacity(meshRootRef.current, 1);
  }, [meshRootRef]);

  useFrame((_, dt) => {
    if (phase.current !== "fading" || !overlayPose || !overlayReady.current) return;
    const a = meshRootRef.current;
    const b = wrapB.current;
    if (!a || !b) return;

    blend.current = Math.min(1, blend.current + dt * FADE_SPEED);
    setGroupOpacity(a, 1 - blend.current);
    setGroupOpacity(b, blend.current);

    if (blend.current >= 1 && !firedComplete.current) {
      firedComplete.current = true;
      phase.current = "idle";
      blend.current = 0;
      overlayReady.current = false;
      setGroupOpacity(a, 1);
      setGroupOpacity(b, 0);
      onFadeCompleteRef.current();
    }
  });

  return (
    <>
      <BboxOrbitTarget controlsRef={controlsRef} meshRootRef={meshRootRef} />
      <ambientLight intensity={0.92} />
      <hemisphereLight args={["#ffffff", "#b8b8c8", 0.55]} />
      <directionalLight position={[3.5, 7.5, 5]} intensity={1.35} castShadow={false} />
      <directionalLight position={[-3.5, 3.5, -2.5]} intensity={0.55} />
      <directionalLight position={[0, 2, -4]} intensity={0.35} />

      <group ref={meshRootRef}>
        <Suspense fallback={null}>
          <LoadedCharacter key={basePose} pose={basePose} />
        </Suspense>
      </group>

      {overlayPose ? (
        <group ref={wrapB}>
          <Suspense fallback={null}>
            <LoadedCharacter
              key={overlayPose}
              pose={overlayPose}
              onLoaded={handleOverlayLoaded}
            />
          </Suspense>
        </group>
      ) : null}
    </>
  );
}

export type About3DStageHandle = {
  prefetch: (pose: AboutPose) => void;
};

type About3DStageProps = {
  basePose: AboutPose;
  overlayPose: AboutPose | null;
  onFadeComplete: () => void;
  className?: string;
  /** Nest inside Figma chrome frame: no outer radius/shadow; optional hint row hidden. */
  embedded?: boolean;
  hideFooterHint?: boolean;
};

export const About3DStage = forwardRef<About3DStageHandle, About3DStageProps>(
  function About3DStage(
    { basePose, overlayPose, onFadeComplete, className, embedded, hideFooterHint },
    ref,
  ) {
    const [canRender3D] = useState(() => typeof window !== "undefined" && supportsWebGL());
    const [autoRotate, setAutoRotate] = useState(true);
    const [targetDistance, setTargetDistance] = useState(INITIAL_TARGET_DISTANCE);
    const characterRootRef = useRef<THREE.Group | null>(null);
    const controlsRef = useRef<OrbitControlsImpl | null>(null);
    const onFadeCompleteRef = useRef(onFadeComplete);
    useEffect(() => {
      onFadeCompleteRef.current = onFadeComplete;
    }, [onFadeComplete]);

    useImperativeHandle(
      ref,
      () => ({
        prefetch: (pose: AboutPose) => {
          useGLTF.preload(ABOUT_MODEL_URL[pose]);
        },
      }),
      [],
    );

    useEffect(() => {
      useGLTF.preload(ABOUT_MODEL_URL.stand);
    }, []);

    const zoomIn = () => {
      setTargetDistance((d) => Math.max(MIN_DISTANCE, Number((d - 0.35).toFixed(2))));
    };
    const zoomOut = () => {
      setTargetDistance((d) => Math.min(MAX_DISTANCE, Number((d + 0.35).toFixed(2))));
    };

    if (!canRender3D) {
      return (
        <div
          role="img"
          aria-label="3D model unavailable"
          className={`flex min-h-[280px] w-full flex-col items-center justify-center px-6 text-center ${embedded ? "" : "rounded-[24px] border"} ${className ?? ""}`}
          style={{
            background: embedded ? "transparent" : "color-mix(in oklab, var(--bg-surface) 92%, transparent)",
            borderColor: "var(--border-default)",
          }}
        >
          <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
            WebGL is not available in this browser. Pose previews are disabled.
          </p>
        </div>
      );
    }

    return (
      <div
        role="img"
        aria-label="Interactive 3D figure. Drag to rotate, scroll or buttons to zoom."
        className={`relative w-full overflow-hidden ${embedded ? "flex min-h-0 flex-1 flex-col" : ""} ${embedded ? "" : "rounded-[24px] border shadow-[0px_12px_40px_rgba(0,0,0,0.06)]"} ${className ?? ""}`}
        style={
          embedded
            ? undefined
            : {
                background: "color-mix(in oklab, var(--bg-surface) 90%, transparent)",
                borderColor: "var(--border-default)",
              }
        }
      >
        <div
          className={`pointer-events-none absolute right-3 z-10 ${embedded ? "top-14" : "top-3"}`}
        >
          <div
            className="pointer-events-auto flex items-center gap-1 rounded-full border p-1 backdrop-blur-md"
            style={{
              background: "color-mix(in oklab, var(--bg-surface) 78%, transparent)",
              borderColor: "color-mix(in oklab, var(--border-default) 85%, transparent)",
              boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
            }}
          >
            <button
              type="button"
              aria-label="Zoom in"
              onClick={zoomIn}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[17px] font-medium transition-transform duration-200 hover:scale-105 hover:opacity-90"
              style={{ color: "var(--text-primary)" }}
            >
              +
            </button>
            <button
              type="button"
              aria-label="Zoom out"
              onClick={zoomOut}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[19px] font-medium transition-transform duration-200 hover:scale-105 hover:opacity-90"
              style={{ color: "var(--text-primary)" }}
            >
              −
            </button>
            <button
              type="button"
              aria-label={autoRotate ? "Pause auto rotate" : "Resume auto rotate"}
              onClick={() => setAutoRotate((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 hover:opacity-90"
              style={{
                background: autoRotate
                  ? "color-mix(in oklab, var(--text-primary) 10%, transparent)"
                  : "transparent",
                color: "var(--text-primary)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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

        <div
          className={
            embedded
              ? "flex min-h-0 w-full min-w-0 flex-1 flex-col"
              : "h-[min(52vw,420px)] w-full min-h-[300px] max-h-[520px] sm:h-[380px] lg:h-[440px]"
          }
        >
          <div className="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col">
            <Canvas
              className="block h-full min-h-0 w-full min-w-0 flex-1 touch-none"
              dpr={[1, 1.25]}
              camera={{ position: CAMERA_INITIAL, fov: CAMERA_FOV }}
            >
            <CrossfadeScene
              basePose={basePose}
              overlayPose={overlayPose}
              onFadeCompleteRef={onFadeCompleteRef}
              controlsRef={controlsRef}
              meshRootRef={characterRootRef}
            />
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom
              minDistance={MIN_DISTANCE}
              maxDistance={MAX_DISTANCE}
              minPolarAngle={Math.PI / 3.25}
              maxPolarAngle={(Math.PI * 2) / 2.85}
              autoRotate={autoRotate}
              autoRotateSpeed={0.72}
              target={INITIAL_ORBIT_TARGET}
              enableDamping
              dampingFactor={0.08}
            />
            <CameraRig
              controlsRef={controlsRef}
              targetDistance={targetDistance}
              autoRotate={autoRotate}
              meshRootRef={characterRootRef}
            />
          </Canvas>
          </div>
        </div>
        {!hideFooterHint ? (
          <p
            className="px-4 pb-3 pt-1 text-center text-[11px] font-medium tracking-wide"
            style={{ color: "var(--text-muted)" }}
          >
            Drag to rotate · Scroll or buttons to zoom
          </p>
        ) : null}
      </div>
    );
  },
);
