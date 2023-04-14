import React, { useEffect } from "react";
import { createRef } from "react";

const Canvas = () => {
  const canvasRef = createRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const $ = canvas.getContext("2d");

    const col = (x, y, r, g, b) => {
      $.fillStyle = `rgb(${r},${g},${b})`;
      $.fillRect(x, y, 1, 1);
    };

    const R = (x, y, t) => {
      return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = (x, y, t) => {
      return Math.floor(
        192 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    const B = (x, y, t) => {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;
    let x = 0;
    let y = 0;

    const run = () => {
      for (x = 0; x <= 35; x++) {
        for (y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.05;
      window.requestAnimationFrame(run);
    };

    run();
  }, [canvasRef]);

  return (
    <canvas
      className='w-full h-full'
      id='canv'
      width='32'
      height='32'
      ref={canvasRef}
    />
  );
};

export default Canvas
