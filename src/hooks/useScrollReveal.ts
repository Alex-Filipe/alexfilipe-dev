import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` as they scroll into view.
 *
 * The reveal styles only apply once this hook flags the document with
 * `reveal-enabled`, so content stays visible when JavaScript is disabled or
 * when the user prefers reduced motion.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("reveal-enabled");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, []);
}
