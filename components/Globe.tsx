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

    resizeCanvas();

    let rotation = 0;
    
    // Generate random points on a sphere
    const dots: { x: number; y: number; z: number; color: string }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < GLOBE_CONFIG.dotsCount; i++) {
      const y = 1 - (i / (GLOBE_CONFIG.dotsCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Randomly assign colors based on "density" logic or pure random
      let color = GLOBE_CONFIG.colors.base;
      const rand = Math.random();
      if (rand > 0.90) color = GLOBE_CONFIG.colors.highlight;
      else if (rand > 0.85) color = GLOBE_CONFIG.colors.accent;

      dots.push({ x, y, z, color });
    }

    let animationFrameId: number | null = null;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Center of the canvas
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.35;

      rotation += GLOBE_CONFIG.rotationSpeed;

      // Sort dots by Z depth so back dots are drawn first (simple painter's algorithm)
      // We need to project them first to sort correctly, but for a simple sphere, 
      // just rotating and checking Z is enough.
      
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

      // Draw lines between close neighbors (optional, adds "network" feel)
      // Skipped for performance in this specific MVP, focusing on dots.

      projectedDots.forEach(p => {
        // Only draw dots on the "front" of the sphere for cleaner look, or draw all with opacity
        const alpha = p.z > 0 ? 1 : 0.12; 
        
        ctx.beginPath();
        const dotRadius = GLOBE_CONFIG.dotSize * (p.z > 0 ? 1.3 : 0.65) * p.scale;
        ctx.arc(p.x, p.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        
        // Glow effect for highlight dots on front
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
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
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