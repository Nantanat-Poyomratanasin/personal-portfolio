import { useEffect, useRef } from "react";

export default function PixelHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    };

    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const progress = Math.min(window.scrollY / window.innerHeight, 1);

      for (let y = 0; y < canvas.height; y += 8) {
        for (let x = 0; x < canvas.width; x += 8) {
          const threshold =
            (x + y * canvas.width) / (canvas.width * canvas.height);

          if (progress > threshold) {
            ctx.fillStyle = "#000";
            ctx.fillRect(x, y, 6, 6);
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "400px",
        display: "block",
      }}
    />
  );
}
