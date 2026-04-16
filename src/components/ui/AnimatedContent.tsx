import React, { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  onComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 28,
  direction = "vertical",
  reverse = false,
  duration = 0.9,
  ease = "power2.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 0.985,
  threshold = 0.2,
  delay = 0,
  once = true,
  className,
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const axis = direction === "horizontal" ? "x" : "y";
      const offset = reverse ? -distance : distance;
      const startPct = (1 - threshold) * 100;

      gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
      });

      if (once) {
        gsap.to(el, {
          [axis]: 0,
          scale: 1,
          opacity: 1,
          duration,
          ease,
          delay,
          onComplete,
          scrollTrigger: {
            trigger: el,
            start: `top ${startPct}%`,
            toggleActions: "play none none none",
            once: true,
          },
        });
      } else {
        gsap.fromTo(
          el,
          {
            [axis]: offset,
            scale,
            opacity: animateOpacity ? initialOpacity : 1,
          },
          {
            [axis]: 0,
            scale: 1,
            opacity: 1,
            duration,
            ease,
            delay,
            onComplete,
            scrollTrigger: {
              trigger: el,
              start: `top ${startPct}%`,
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    once,
    onComplete,
  ]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;