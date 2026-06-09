import { useEffect, useRef } from "react";

export default function PixelTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const handleMove = (e) => {
      particles.push({
        x: Math.floor(e.clientX / 8) * 8,
        y: Math.floor(e.clientY / 8) * 8,
        life: 1,
      });

      if (particles.length > 100) {
        particles.shift();
      }
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.globalAlpha = p.life;

        ctx.fillStyle = "#b8a89d";

        ctx.fillRect(p.x, p.y, 8, 8);

        p.life -= 0.03;
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
