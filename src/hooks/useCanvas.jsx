import { useRef } from "react";

const useCanvas = () => {
  const canvasRef = useRef(document.createElement("canvas"));

  const getCanvas = () => canvasRef.current;

  const getContext = () => {
    return canvasRef.current.getContext("2d");
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const setCanvasSize = (width, height) => {
    const canvas = canvasRef.current;

    canvas.width = width;
    canvas.height = height;
  };

  return {
    canvas: canvasRef.current,
    getCanvas,
    getContext,
    clearCanvas,
    setCanvasSize,
  };
};

export default useCanvas;