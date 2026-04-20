import { WorkPageLoadingShell } from "@/components/WorkPageLoadingShell";

/**
 * Next.js 16 does not pass `params` into `loading.tsx` for this route; awaiting
 * `params` was undefined and crashed every `/work/[slug]` request (500).
 * Titles come from `useParams` + `getProject` inside `WorkPageLoadingShell`.
 */
export default function Loading() {
  return <WorkPageLoadingShell />;
}
