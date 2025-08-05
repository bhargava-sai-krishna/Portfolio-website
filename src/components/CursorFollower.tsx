import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

const CursorFollower = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const segmentsRef = useRef<Point[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize segments
    const segmentCount = 25;
    segmentsRef.current = Array(segmentCount).fill(null).map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const drawReptile = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const segments = segmentsRef.current;
      const mouse = mouseRef.current;

      // Update first segment to follow mouse
      if (segments.length > 0) {
        const dx = mouse.x - segments[0].x;
        const dy = mouse.y - segments[0].y;
        segments[0].x += dx * 0.3;
        segments[0].y += dy * 0.3;
      }

      // Update following segments
      for (let i = 1; i < segments.length; i++) {
        const dx = segments[i - 1].x - segments[i].x;
        const dy = segments[i - 1].y - segments[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const targetDistance = 15;

        if (distance > targetDistance) {
          const angle = Math.atan2(dy, dx);
          segments[i].x = segments[i - 1].x - Math.cos(angle) * targetDistance;
          segments[i].y = segments[i - 1].y - Math.sin(angle) * targetDistance;
        }
      }

      // Draw the reptile
      ctx.strokeStyle = 'hsl(var(--primary))';
      ctx.fillStyle = 'hsl(var(--primary))';
      ctx.lineWidth = 2;

      // Draw body segments
      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        const size = Math.max(3, (segments.length - i) * 0.8);
        
        // Draw segment circle
        ctx.beginPath();
        ctx.arc(segment.x, segment.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines
        if (i < segments.length - 1) {
          ctx.beginPath();
          ctx.moveTo(segment.x, segment.y);
          ctx.lineTo(segments[i + 1].x, segments[i + 1].y);
          ctx.stroke();
        }

        // Add spikes on sides
        if (i % 3 === 0 && i > 0) {
          const prevSegment = segments[i - 1];
          const angle = Math.atan2(segment.y - prevSegment.y, segment.x - prevSegment.x);
          const spikeLength = size * 0.8;
          
          // Left spike
          const leftAngle = angle + Math.PI / 2;
          const leftX = segment.x + Math.cos(leftAngle) * spikeLength;
          const leftY = segment.y + Math.sin(leftAngle) * spikeLength;
          
          // Right spike
          const rightAngle = angle - Math.PI / 2;
          const rightX = segment.x + Math.cos(rightAngle) * spikeLength;
          const rightY = segment.y + Math.sin(rightAngle) * spikeLength;
          
          ctx.beginPath();
          ctx.moveTo(segment.x, segment.y);
          ctx.lineTo(leftX, leftY);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(segment.x, segment.y);
          ctx.lineTo(rightX, rightY);
          ctx.stroke();
        }
      }

      // Draw head (first segment) with eyes
      if (segments.length > 0) {
        const head = segments[0];
        const headSize = 12;
        
        // Head circle
        ctx.beginPath();
        ctx.arc(head.x, head.y, headSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Eyes
        ctx.fillStyle = 'hsl(var(--background))';
        ctx.beginPath();
        ctx.arc(head.x - 4, head.y - 3, 2, 0, Math.PI * 2);
        ctx.arc(head.x + 4, head.y - 3, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationIdRef.current = requestAnimationFrame(drawReptile);
    };

    window.addEventListener('mousemove', handleMouseMove);
    drawReptile();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'difference' }}
    />
  );
};

export default CursorFollower;