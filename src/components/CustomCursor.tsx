import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  alpha: number; size: number; color: string;
  isFlower: boolean; rotation: number; rotationSpeed: number;
}

const COLORS = [
  "hsl(175, 50%, 50%)",
  "hsl(340, 60%, 72%)",
  "hsl(290, 35%, 65%)",
  "hsl(150, 35%, 60%)",
  "hsl(42, 70%, 60%)",
];

const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
  ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.4, x, y + size);
  ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.4, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
  ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
  ctx.closePath();
};

const drawFlower = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
  const petalCount = 5;
  for (let i = 0; i < petalCount; i++) {
    ctx.beginPath();
    const angle = (i * Math.PI * 2) / petalCount;
    const px = x + Math.cos(angle) * size * 0.35;
    const py = y + Math.sin(angle) * size * 0.35;
    ctx.ellipse(px, py, size * 0.3, size * 0.18, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(x, y, size * 0.12, 0, Math.PI * 2);
  const prevFill = ctx.fillStyle;
  ctx.fillStyle = "hsl(42, 70%, 60%)";
  ctx.fill();
  ctx.fillStyle = prevFill;
};

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);
  const isHovering = useRef(false);
  const frameCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticle = (x: number, y: number, vx: number, vy: number, size: number) => {
      particles.current.push({
        x, y, vx, vy, alpha: 1, size,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        isFlower: Math.random() < 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.08,
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (frameCount.current % 3 === 0) {
        spawnParticle(e.clientX, e.clientY, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5 - 0.5, Math.random() * 6 + 4);
      }
    };

    const onClick = (e: MouseEvent) => {
      for (let i = 0; i < 10; i++) {
        const angle = (Math.PI * 2 * i) / 10;
        const speed = Math.random() * 3 + 2;
        spawnParticle(e.clientX, e.clientY, Math.cos(angle) * speed, Math.sin(angle) * speed, Math.random() * 8 + 5);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!target.closest("a, button, [role='button'], input, textarea, select");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("mouseover", onMouseOver);

    let animId: number;
    const animate = () => {
      frameCount.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.alpha > 0.01);
      for (const p of particles.current) {
        p.x += p.vx; p.y += p.vy; p.vy += 0.02;
        p.alpha -= 0.018; p.size *= 0.985; p.rotation += p.rotationSpeed;
        ctx.save(); ctx.globalAlpha = p.alpha; ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y); ctx.rotate(p.rotation); ctx.translate(-p.x, -p.y);
        if (p.isFlower) { drawFlower(ctx, p.x, p.y, p.size); }
        else { drawHeart(ctx, p.x, p.y - p.size / 2, p.size); ctx.fill(); }
        ctx.restore();
      }

      const { x, y } = mouse.current;
      const pulse = 1 + Math.sin(frameCount.current * 0.08) * 0.12;
      const size = (isHovering.current ? 22 : 16) * pulse;

      ctx.save();
      ctx.shadowColor = "hsl(175, 50%, 50%)";
      ctx.shadowBlur = 20;
      ctx.fillStyle = "hsl(175, 50%, 42%)";
      drawHeart(ctx, x, y - size / 2, size);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "hsl(340, 60%, 75%)";
      const innerSize = size * 0.45;
      drawHeart(ctx, x, y - size / 2 + size * 0.18, innerSize);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y + size * 0.3, size + 4, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(290, 35%, 60%, ${isHovering.current ? 0.4 : 0.2})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return <canvas ref={canvasRef} className="fixed inset-0 z-[9999] pointer-events-none" />;
};

export default CustomCursor;
