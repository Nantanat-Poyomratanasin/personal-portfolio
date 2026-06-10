// import { useEffect, useRef } from "react";

// export default function PixelHero() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let animationId;
//     let width;
//     let height;
//     let time = 0;

//     const resize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     resize();

//     const spacing = 18;

//     const animate = () => {
//       time += 0.05;

//       ctx.clearRect(0, 0, width, height);

//       for (let y = 0; y < height; y += spacing) {
//         for (let x = 0; x < width; x += spacing) {
//           const opacity =
//             0.08 + ((Math.sin(time + x * 0.01 + y * 0.01) + 1) / 2) * 0.15;

//           ctx.fillStyle = `rgba(0,0,0,${opacity})`;

//           ctx.beginPath();

//           ctx.arc(x, y + Math.sin(time + x * 0.02) * 2, 2, 0, Math.PI * 2);

//           ctx.fill();
//         }
//       }

//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     window.addEventListener("resize", resize);

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: "absolute",
//         inset: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: 0,
//         pointerEvents: "none",
//       }}
//     />
//   );
// }
