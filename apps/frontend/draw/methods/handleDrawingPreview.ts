import { toolType } from "../types";

export function handleDrawingPreview(
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    tool: toolType,
    cameraOffset: { x: number; y: number }
): void {
    const width = endX - startX;
    const height = endY - startY;

    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.lineWidth = 2;

    if (tool === toolType.rectangle) {
        ctx.rect(startX + cameraOffset.x, startY + cameraOffset.y, width, height);
    } else if (tool === toolType.circle) {
        const radius = Math.hypot(width, height);
        ctx.arc(startX + cameraOffset.x, startY + cameraOffset.y, radius, 0, 2 * Math.PI);
    } else if (tool === toolType.line) {
        ctx.moveTo(startX + cameraOffset.x, startY + cameraOffset.y);
        ctx.lineTo(endX + cameraOffset.x, endY + cameraOffset.y);
    }

    ctx.stroke();
}
