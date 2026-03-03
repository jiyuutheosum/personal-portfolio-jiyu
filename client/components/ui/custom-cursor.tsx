import React, { useEffect, useRef } from "react";

/**
 * Global Custom Cursor
 *
 * - Mount once (usually in App.tsx)
 * - Add data-cursor="noface" (or any name) on elements to trigger a variant
 * - Respects prefers-reduced-motion and disables on small screens (mobile)
 */

type CursorVariant = "default" | "hover" | "noface" | string;

const isMobile = () => {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Position state (we don't use setState to avoid re-renders)
  const pos = useRef({ x: 0, y: 0 }); // pointer target
  const cur = useRef({ x: 0, y: 0 }); // cursor actual
  const follower = useRef({ x: 0, y: 0 }); // trailing

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReducedMotion.matches) return;
    if (isMobile()) return; // disable on mobile by default for performance/usability

    // Create DOM nodes if they don't exist (or use refs)
    let cursor = cursorRef.current;
    let followerEl = followerRef.current;

    if (!cursor) {
      cursor = document.createElement("div");
      cursor.className = "custom-cursor";
      cursor.setAttribute("data-variant", "default");
      document.body.appendChild(cursor);
      cursorRef.current = cursor;
    }

    if (!followerEl) {
      followerEl = document.createElement("div");
      followerEl.className = "custom-cursor-follower";
      document.body.appendChild(followerEl);
      followerRef.current = followerEl;
    }

    // Ensure native cursor hidden (we add a class to body so devs can opt-out if needed)
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      // Immediately position the visible cursor element to avoid initial jump
      // (actual smoothing done in animation loop)
    };

    // Variant handling: set data-variant on cursor based on hovered element
    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // if an element explicitly sets data-cursor, use that
      const explicit = target.closest("[data-cursor]") as HTMLElement | null;
      if (explicit) {
        const v = explicit.getAttribute("data-cursor") || "default";
        cursor!.setAttribute("data-variant", v);
        cursor!.classList.add("custom-cursor--active");
        return;
      }

      // standard interactions: links, buttons, inputs, selects -> smaller/hidden cursor or hover style
      const tag = target.tagName.toLowerCase();
      if (
        target.closest("a, button, input, textarea, select, label, [role='button']")
      ) {
        cursor!.setAttribute("data-variant", "hover");
        cursor!.classList.add("custom-cursor--active");
        return;
      }

      // default
      cursor!.setAttribute("data-variant", "default");
      cursor!.classList.remove("custom-cursor--active");
    };

    const onOut = (e: Event) => {
      // reset to default
      cursor!.setAttribute("data-variant", "default");
      cursor!.classList.remove("custom-cursor--active");
    };

    const onVisibility = () => {
      // hide when tab not visible
      if (document.hidden) {
        cursor!.style.opacity = "0";
        followerEl!.style.opacity = "0";
      } else {
        cursor!.style.opacity = "";
        followerEl!.style.opacity = "";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver, true);
    window.addEventListener("mouseout", onOut, true);
    document.addEventListener("visibilitychange", onVisibility);

    const ease = 0.18;
    const followEase = 0.08;

    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * ease;
      cur.current.y += (pos.current.y - cur.current.y) * ease;

       follower.current.x += (cur.current.x - follower.current.x) * followEase;
       follower.current.y += (cur.current.y - follower.current.y) * followEase;


      follower.current.x +=
        (cur.current.x - follower.current.x) * followEase;
      follower.current.y +=
        (cur.current.y - follower.current.y) * followEase;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver, true);
      window.removeEventListener("mouseout", onOut, true);
      document.removeEventListener("visibilitychange", onVisibility);

      if (cursorRef.current) {
        cursorRef.current.remove();
        cursorRef.current = null;
      }
      if (followerRef.current) {
        followerRef.current.remove();
        followerRef.current = null;
      }
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return null; // this component manages DOM nodes directly
}