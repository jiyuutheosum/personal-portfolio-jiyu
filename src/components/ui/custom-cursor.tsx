import React, { useEffect, useRef } from "react";

type CustomCursorProps = {
  wrapperElement?: HTMLElement | null;
};

const isMobile = () => {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent
  );
};

export default function CustomCursor({ wrapperElement: _wrapperElement }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const pos = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });

  const isVisibleRef = useRef(false);
  const hasInitPosRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReducedMotion.matches) return;
    if (isMobile()) return;

    const scope = document.documentElement;

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    cursor.setAttribute("data-variant", "default");
    cursor.style.opacity = "0";
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const followerEl = document.createElement("div");
    followerEl.className = "custom-cursor-follower";
    followerEl.style.opacity = "0";
    document.body.appendChild(followerEl);
    followerRef.current = followerEl;

    document.documentElement.classList.add("has-custom-cursor");

    const show = () => {
      if (isVisibleRef.current) return;
      isVisibleRef.current = true;

      if (cursorRef.current) cursorRef.current.style.opacity = "1";
      if (followerRef.current) followerRef.current.style.opacity = "1";
    };

    const hide = () => {
      if (!isVisibleRef.current) return;
      isVisibleRef.current = false;

      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (followerRef.current) followerRef.current.style.opacity = "0";
    };

    const onMove = (e: MouseEvent) => {
      show();

      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (!hasInitPosRef.current) {
        hasInitPosRef.current = true;
        cur.current.x = e.clientX;
        cur.current.y = e.clientY;
        follower.current.x = e.clientX;
        follower.current.y = e.clientY;
      }
    };

    const onOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target || !cursorRef.current) return;

      const explicit = target.closest("[data-cursor]") as HTMLElement | null;
      if (explicit) {
        const variant = explicit.getAttribute("data-cursor") || "default";
        cursorRef.current.setAttribute("data-variant", variant);
        return;
      }

      if (
        target.closest(
          "a, button, input, textarea, select, label, [role='button']"
        )
      ) {
        cursorRef.current.setAttribute("data-variant", "hover");
        return;
      }

      cursorRef.current.setAttribute("data-variant", "default");
    };

    const onEnterWindow = () => show();
    const onLeaveWindow = () => hide();
    const onBlur = () => hide();

    scope.addEventListener("mousemove", onMove);
    scope.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseenter", onEnterWindow);
    document.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("blur", onBlur);

    const followEase = 0.12;

    const loop = () => {
      cur.current.x = pos.current.x;
      cur.current.y = pos.current.y;

      follower.current.x += (cur.current.x - follower.current.x) * followEase;
      follower.current.y += (cur.current.y - follower.current.y) * followEase;

      if (cursorRef.current && isVisibleRef.current) {
        cursorRef.current.style.transform = `translate3d(${cur.current.x}px, ${cur.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (followerRef.current && isVisibleRef.current) {
        followerRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      scope.removeEventListener("mousemove", onMove);
      scope.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseenter", onEnterWindow);
      document.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("blur", onBlur);

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

  return null;
}