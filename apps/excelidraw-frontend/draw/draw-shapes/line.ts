export default function drawLine(
    ctx: CanvasRenderingContext2D,
    line: {
        startX: number,
        startY: number,
        endX: number,
        endY: number
    },
    cameraOffset: { x: number, y: number }
) {
    const { startX, startY, endX, endY } = line;
    ctx.beginPath();
    ctx.moveTo(startX + cameraOffset.x, startY + cameraOffset.y);
    ctx.lineTo(endX + cameraOffset.x, endY + cameraOffset.y);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.lineWidth = 2;
    ctx.stroke();
}