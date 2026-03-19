import React, { useCallback, useMemo, useRef, useState } from "react";

type TiltedCardProps = {
  children: React.ReactNode;
  className?: string;

  /** Max tilt in degrees */
  rotateAmplitude?: number;

  /** Perspective distance in px */
  perspective?: number;

  /** Scale on hover */
  scaleOnHover?: number;

  /** Transition speed while hovering (ms) */
  hoverTransitionMs?: number;

  /** Transition speed when leaving (ms) */
  leaveTransitionMs?: number;

  /** Disable tilt completely */
  disabled?: boolean;
};

type TiltState = {
  rx: number;
  ry: number;
  hovering: boolean;
};

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export default function TiltedCard({
  children,
  className,
  rotateAmplitude = 12,
  perspective = 900,
  scaleOnHover = 1.03,
  hoverTransitionMs = 140,
  leaveTransitionMs = 220,
  disabled = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState<TiltState>({ rx: 0, ry: 0, hovering: false });

  const style = useMemo<React.CSSProperties>(() => {
    const transform = disabled
      ? `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
      : `perspective(${perspective}px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${
          tilt.hovering ? scaleOnHover : 1
        })`;

    return {
      transform,
      transformStyle: "preserve-3d",
      transition: `transform ${tilt.hovering ? hoverTransitionMs : leaveTransitionMs}ms ease-out`,
      willChange: "transform",
    };
  }, [
    disabled,
    hoverTransitionMs,
    leaveTransitionMs,
    perspective,
    scaleOnHover,
    tilt.hovering,
    tilt.rx,
    tilt.ry,
  ]);

  const handlePointerEnter = useCallback(() => {
    if (disabled) return;
    setTilt((prev) => ({ ...prev, hovering: true }));
  }, [disabled]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled) return;

      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const nx = px * 2 - 1; // [-1, 1]
      const ny = py * 2 - 1; // [-1, 1]

      const ry = clamp(nx * rotateAmplitude, -rotateAmplitude, rotateAmplitude);
      const rx = clamp(-ny * rotateAmplitude, -rotateAmplitude, rotateAmplitude);

      setTilt({ rx, ry, hovering: true });
    },
    [disabled, rotateAmplitude]
  );

  const handlePointerLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0, hovering: false });
  }, []);

  return (
    <div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}