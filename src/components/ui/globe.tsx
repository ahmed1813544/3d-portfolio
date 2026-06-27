"use client";

import { useEffect, useRef, useMemo } from "react";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const lines = useMemo(() => {
    const result: [number, number, number][][] = [];
    const radius = 1;

    for (let lat = -80; lat <= 80; lat += 20) {
      const points: [number, number, number][] = [];
      const radLat = (lat * Math.PI) / 180;
      const r = radius * Math.cos(radLat);
      const y = radius * Math.sin(radLat);
      for (let lng = 0; lng <= 360; lng += 5) {
        const radLng = (lng * Math.PI) / 180;
        points.push([r * Math.cos(radLng), y, r * Math.sin(radLng)]);
      }
      result.push(points);
    }

    for (let lng = 0; lng < 360; lng += 30) {
      const points: [number, number, number][] = [];
      const radLng = (lng * Math.PI) / 180;
      for (let lat = -90; lat <= 90; lat += 5) {
        const radLat = (lat * Math.PI) / 180;
        const r = radius * Math.cos(radLat);
        const y = radius * Math.sin(radLat);
        points.push([r * Math.cos(radLng), y, r * Math.sin(radLng)]);
      }
      result.push(points);
    }

    return result;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const project = (x: number, y: number, z: number, w: number, h: number) => {
      const fov = 3;
      const scale = fov / (fov + z);
      return {
        x: w / 2 + x * scale * w * 0.4,
        y: h / 2 - y * scale * h * 0.4,
      };
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      rotation += 0.003;

      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);

      ctx.strokeStyle = "rgba(139, 92, 246, 0.3)";
      ctx.lineWidth = 0.8;

      for (const line of lines) {
        ctx.beginPath();
        for (let i = 0; i < line.length; i++) {
          const [x, y, z] = line[i];
          const rx = x * cosR - z * sinR;
          const rz = x * sinR + z * cosR;
          const p = project(rx, y, rz, w, h);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(139, 92, 246, 0.6)";
      for (let lat = -80; lat <= 80; lat += 40) {
        for (let lng = 0; lng < 360; lng += 30) {
          const radLat = (lat * Math.PI) / 180;
          const radLng = (lng * Math.PI) / 180;
          const r = Math.cos(radLat);
          const x = r * Math.cos(radLng);
          const y = Math.sin(radLat);
          const z = r * Math.sin(radLng);

          const rx = x * cosR - z * sinR;
          const rz = x * sinR + z * cosR;
          const p = project(rx, y, rz, w, h);
          const scale = 3 / (3 + rz);

          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5 * scale, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [lines]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
