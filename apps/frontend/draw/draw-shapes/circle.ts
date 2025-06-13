export default function drawCircle(
    ctx: CanvasRenderingContext2D,
    circle: {
        startX: number;
        startY: number;
        radius: number;
    },
    cameraOffset: { x: number, y: number }
) {
    const { startX, startY, radius } = circle;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.lineWidth = 2;
    ctx.arc(startX + cameraOffset.x, startY + cameraOffset.y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}