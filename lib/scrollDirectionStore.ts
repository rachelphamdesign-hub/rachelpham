export type VerticalScrollDirection = "up" | "down";

let direction: VerticalScrollDirection = "down";
let lastY = 0;
let attached = false;

function onScroll() {
  const y = window.scrollY;
  const delta = y - lastY;
  if (delta > 2) direction = "down";
  else if (delta < -2) direction = "up";
  lastY = y;
}

/** Attach a single passive window scroll listener (idempotent). */
export function ensureScrollDirectionListener(): void {
  if (typeof window === "undefined" || attached) return;
  attached = true;
  lastY = window.scrollY;
  window.addEventListener("scroll", onScroll, { passive: true });
}

/** Last meaningful vertical scroll direction (for reveal entry axis). */
export function getVerticalScrollDirection(): VerticalScrollDirection {
  return direction;
}
