import { useEffect, useState } from "react";

type Phase = "typing" | "deleting";

type TypewriterOptions = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
};

type TypewriterState = {
  /** The portion of the current snippet currently visible. */
  text: string;
  /** Index of the active snippet, so callers can sync other UI to it. */
  index: number;
  /** True when motion is reduced and the animation is disabled. */
  isReduced: boolean;
};

/**
 * Types each snippet character by character, pauses, deletes it, then moves on
 * to the next one — looping forever. When the user prefers reduced motion the
 * first snippet is shown in full with no animation.
 */
export function useTypewriter(
  snippets: string[],
  { typeSpeed = 30, deleteSpeed = 14, pauseTime = 2400 }: TypewriterOptions = {}
): TypewriterState {
  const [isReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    if (isReduced || snippets.length === 0) {
      return;
    }

    const current = snippets[index] ?? "";
    let delay: number;
    let next: () => void;

    if (phase === "typing") {
      if (sub < current.length) {
        delay = typeSpeed;
        next = () => setSub((value) => value + 1);
      } else {
        delay = pauseTime;
        next = () => setPhase("deleting");
      }
    } else {
      if (sub > 0) {
        delay = deleteSpeed;
        next = () => setSub((value) => value - 1);
      } else {
        delay = typeSpeed * 6;
        next = () => {
          setIndex((value) => (value + 1) % snippets.length);
          setPhase("typing");
        };
      }
    }

    const timer = window.setTimeout(next, delay);
    return () => window.clearTimeout(timer);
  }, [sub, phase, index, snippets, typeSpeed, deleteSpeed, pauseTime, isReduced]);

  const safeIndex = index % Math.max(snippets.length, 1);
  const current = snippets[safeIndex] ?? "";
  // In reduced-motion mode the snippet is shown in full, with no animation.
  const text = isReduced ? current : current.slice(0, sub);

  return { text, index: safeIndex, isReduced };
}
