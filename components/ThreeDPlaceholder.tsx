"use client";

/**
 * 3D Model Placeholder
 *
 * A responsive container ready for a future 3D asset.
 * To integrate a 3D experience, replace the inner content with:
 *   - Spline: <spline-viewer url="..." />
 *   - Three.js canvas: place a <canvas ref={canvasRef} />
 *   - Model viewer: <model-viewer src="..." />
 *
 * The aspect ratio and responsive layout are preserved regardless of the 3D content.
 */

interface ThreeDPlaceholderProps {
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/4";
  label?: string;
}

export function ThreeDPlaceholder({
  className = "",
  aspectRatio = "16/9",
  label = "3D Experience Coming Soon",
}: ThreeDPlaceholderProps) {
  const paddingMap = {
    "16/9": "56.25%",
    "4/3": "75%",
    "1/1": "100%",
    "3/4": "133.33%",
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border transition-colors ${className}`}
      style={{
        background: "var(--bg-surface)",
        borderColor: "var(--border-default)",
      }}
    >
      {/* Aspect-ratio box */}
      <div style={{ paddingBottom: paddingMap[aspectRatio] }} className="relative w-full">
        {/* 3D content slot — replace this entire div with your 3D element */}
        <div
          id="three-d-container"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: "var(--bg-elevated)" }}
        >
          {/* Grid background pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* 3D icon */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
              style={{ background: "var(--bg-page)" }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16 4L28 10V22L16 28L4 22V10L16 4Z"
                  stroke="var(--text-secondary)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 10L16 16M16 16L28 10M16 16V28"
                  stroke="var(--text-secondary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p
              className="font-semibold text-[15px] tracking-[-0.01em]"
              style={{ color: "var(--text-primary)" }}
            >
              {label}
            </p>
            <p
              className="text-[13px] leading-[1.5] max-w-[260px]"
              style={{ color: "var(--text-secondary)" }}
            >
              An interactive 3D experience is being crafted for this section.
              Powered by Spline or Three.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
