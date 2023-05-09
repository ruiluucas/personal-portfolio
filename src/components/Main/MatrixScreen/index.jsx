import React, { useEffect, useRef } from 'react';

const MatrixScreen = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const columns = window.innerWidth / 10;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
  let drops = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    setInterval(draw, 33);
  }, [columns]);

  const draw = () => {
    const ctx = ctxRef.current;
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * 10, drops[i] * 10);
      drops[i]++;
      if (drops[i] * 10 > ctx.canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  return (
    <canvas ref={canvasRef} style={{ height: "800px", width: "1250px", borderRadius: "30px" }} />
  );
};

export default MatrixScreen;
