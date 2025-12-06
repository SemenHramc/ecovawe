import React, { useEffect, useRef } from 'react';

// A lightweight implementation of a dot globe to mimic the "cobe" effect
// without requiring heavy external dependencies for this specific environment.

const GLOBE_CONFIG = {
  dotSize: 1.1,
  rotationSpeed: 0.001,
  dotsCount: 1300,
  colors: {
    base: '#2C4531', // Taiga
    highlight: '#D4E157', // Solar Lime
    accent: '#0066CC', // Gov Blue
  }
};

function loadMask(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function sampleIsLand(img: HTMLImageElement, threshold = 220) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => true;
  ctx.drawImage(img, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  return (lat: number, lon: number) => {
    // lat [-pi/2, pi/2], lon [-pi, pi]
    const u = (lon + Math.PI) / (2 * Math.PI);
    const v = (Math.PI / 2 - lat) / Math.PI;
    const x = Math.min(width - 1, Math.max(0, Math.floor(u * width)));
    const y = Math.min(height - 1, Math.max(0, Math.floor(v * height)));
    const idx = (y * width + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];
    const lum = (r + g + b) / 3;
    // If alpha is 0, treat as water; otherwise threshold by luminance
    return a > 0 && lum < threshold;
  };
}

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || 600;
    let height = canvas.parentElement?.clientHeight || 600;
    let dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      width = canvas.parentElement?.clientWidth || 600;
      height = canvas.parentElement?.clientHeight || 600;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    let animationFrameId: number | null = null;
    let cancelled = false;

    const start = async () => {
      resizeCanvas();

      // Load land mask
      let isLand = (_lat: number, _lon: number) => true;
      try {
        const img = await loadMask('/world-mask.png');
        isLand = sampleIsLand(img);
      } catch (e) {
        // Fallback: full sphere if mask fails
        console.warn('Globe mask failed to load, falling back to full sphere', e);
      }

      if (cancelled) return;

      let rotation = 0;
      const dots: { x: number; y: number; z: number; color: string }[] = [];
      const target = GLOBE_CONFIG.dotsCount;
      const maxAttempts = target * 12;
      let attempts = 0;

      while (dots.length < target && attempts < maxAttempts) {
        attempts += 1;
        const lon = Math.random() * Math.PI * 2 - Math.PI; // -pi..pi
        const lat = Math.asin(Math.random() * 2 - 1); // -pi/2..pi/2
        if (!isLand(lat, lon)) continue;

        // Convert lat/lon to cartesian on unit sphere
        const x = Math.cos(lat) * Math.cos(lon);
        const y = Math.sin(lat);
        const z = Math.cos(lat) * Math.sin(lon);

        let color = GLOBE_CONFIG.colors.base;
        const rand = Math.random();
        if (rand > 0.92) color = GLOBE_CONFIG.colors.highlight;
        else if (rand > 0.86) color = GLOBE_CONFIG.colors.accent;

        dots.push({ x, y, z, color });
      }

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Center of the canvas
        const cx = width / 2;
        const cy = height / 2;
        const radius = Math.min(width, height) * 0.35;

        rotation += GLOBE_CONFIG.rotationSpeed;

        const projectedDots = dots.map(dot => {
          // Rotate around Y axis
          const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
          const rotatedZ = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);
          
          // 3D Projection
          const scale = 350 / (350 - rotatedZ * radius); // Perspective
          const px = cx + rotatedX * radius * scale;
          const py = cy + dot.y * radius * scale;
          
          return { x: px, y: py, z: rotatedZ, color: dot.color, scale };
        });

        projectedDots.forEach(p => {
          const alpha = p.z > 0 ? 1 : 0.12; 
          
          ctx.beginPath();
          const dotRadius = GLOBE_CONFIG.dotSize * (p.z > 0 ? 1.3 : 0.65) * p.scale;
          ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.fill();
          
          if (p.color === GLOBE_CONFIG.colors.highlight && p.z > 0.2) {
              ctx.shadowBlur = 10;
              ctx.shadowColor = GLOBE_CONFIG.colors.highlight;
              ctx.fill();
              ctx.shadowBlur = 0;
          }
        });
        
        ctx.globalAlpha = 1; // Reset
        animationFrameId = requestAnimationFrame(render);
      };

      render();

      const handleVisibility = () => {
        if (document.visibilityState === 'hidden' && animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        } else if (document.visibilityState === 'visible' && animationFrameId === null) {
          render();
        }
      };

      const handleResize = () => {
        resizeCanvas();
      };

      window.addEventListener('resize', handleResize);
      document.addEventListener('visibilitychange', handleVisibility);

      return () => {
        if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibility);
      };
    };

    let cleanup: (() => void) | undefined;
    start().then((fn) => {
      cleanup = fn;
    });

    return () => {
      cancelled = true;
      if (cleanup) cleanup();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative z-10 fade-in">
       {/* Ambient Glow behind the globe */}
      <div className="absolute inset-0 bg-solarLime/20 blur-[100px] rounded-full transform scale-75 pointer-events-none" />
      <canvas ref={canvasRef} className="max-w-full" />
    </div>
  );
};

export default Globe;