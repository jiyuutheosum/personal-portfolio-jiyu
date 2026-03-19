import React, { useEffect, useRef } from "react";

type BubbleCursorProps = {
  wrapperElement?: HTMLElement;
};

class Particle {
  lifeSpan: number;
  initialLifeSpan: number;
  velocity: { x: number; y: number };
  position: { x: number; y: number };
  baseDimension: number;

  constructor(x: number, y: number) {
    this.initialLifeSpan = Math.floor(Math.random() * 60 + 60);
    this.lifeSpan = this.initialLifeSpan;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 + Math.random() * -1,
    };
    this.position = { x, y };
    this.baseDimension = 4;
  }

  update(context: CanvasRenderingContext2D) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;
    this.lifeSpan--;

    const scale =
      0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

    context.fillStyle = "#e6f1f7";
    context.strokeStyle = "#3a92c5";
    context.beginPath();
    context.arc(
      this.position.x - (this.baseDimension / 2) * scale,
      this.position.y - this.baseDimension / 2,
      this.baseDimension * scale,
      0,
      2 * Math.PI,
    );
    context.stroke();
    context.fill();
    context.closePath();
  }
}

const BubbleCursor: React.FC<BubbleCursorProps> = ({ wrapperElement }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let isMounted = true;

    const getTargetElement = () => wrapperElement || document.body;

    const setCanvasSize = () => {
      if (!canvas) return;

      if (wrapperElement) {
        canvas.width = wrapperElement.clientWidth;
        canvas.height = wrapperElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    const addParticle = (x: number, y: number) => {
      particlesRef.current.push(new Particle(x, y));
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isMounted || e.touches.length === 0) return;

      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];

        if (wrapperElement) {
          const rect = wrapperElement.getBoundingClientRect();
          addParticle(touch.clientX - rect.left, touch.clientY - rect.top);
        } else {
          addParticle(touch.clientX, touch.clientY);
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMounted) return;

      if (wrapperElement) {
        const rect = wrapperElement.getBoundingClientRect();
        cursorRef.current.x = e.clientX - rect.left;
        cursorRef.current.y = e.clientY - rect.top;
      } else {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
      }

      addParticle(cursorRef.current.x, cursorRef.current.y);
    };

    const updateParticles = () => {
      if (!isMounted) return;

      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(context);
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        if (particlesRef.current[i].lifeSpan < 0) {
          particlesRef.current.splice(i, 1);
        }
      }
    };

    const loop = () => {
      if (!isMounted) return;
      updateParticles();
      animationFrameRef.current = window.requestAnimationFrame(loop);
    };

    const targetElement = getTargetElement();

    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "40";

    if (wrapperElement) {
      canvas.style.position = "absolute";
    } else {
      canvas.style.position = "fixed";
    }

    setCanvasSize();

    targetElement.addEventListener("mousemove", onMouseMove);
    targetElement.addEventListener("touchmove", onTouchMove, { passive: true });
    targetElement.addEventListener("touchstart", onTouchMove, { passive: true });
    window.addEventListener("resize", setCanvasSize);

    loop();

    return () => {
      isMounted = false;

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      targetElement.removeEventListener("mousemove", onMouseMove);
      targetElement.removeEventListener("touchmove", onTouchMove);
      targetElement.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("resize", setCanvasSize);

      particlesRef.current = [];
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [wrapperElement]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default BubbleCursor;