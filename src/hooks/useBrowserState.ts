"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Subscribes to a media query without calling setState from an effect body.
 * Returns the server fallback during SSR and the first client render.
 */
export function useMediaQuery(query: string, serverFallback = false): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverFallback
  );
}

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolledPast(threshold = 8): boolean {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > threshold,
    () => false
  );
}
