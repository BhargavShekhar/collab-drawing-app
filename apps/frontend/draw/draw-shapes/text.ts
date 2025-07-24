export default function drawText(
  ctx: CanvasRenderingContext2D,
  text: {
    startX: number;
    startY: number;
    content: string;
  },
  cameraOffset: { x: number; y: number },
) {
  const { startX, startY, content } = text;

  ctx.font = "30px Arial";

  ctx.fillStyle = "cyan";

  ctx.fillText(content, startX + cameraOffset.x, startY + cameraOffset.y);
}
