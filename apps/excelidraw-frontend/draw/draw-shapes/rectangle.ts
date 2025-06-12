export default function drawRectangle(
    ctx: CanvasRenderingContext2D,
    rectangle: {
        startX: number,
        startY: number,
        width: number,
        height: number,
    },
    cameraOffset: { x: number, y: number }
) {
    const { startX, startY, width, height} = rectangle;

    ctx.beginPath();
    ctx.rect(startX + cameraOffset.x, startY + cameraOffset.y, width, height);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.lineWidth = 2;
    ctx.stroke();
}