import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    const canvas = document.getElementById("particles-bg");
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Emerald glowing particles
    const particles = [];
    const count = 110;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.4,
        speedY: Math.random() * 0.4 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // emerald glow color
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`;

        ctx.beginPath();
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(16, 185, 129, 0.8)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;

        // reset
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      id="particles-bg"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
