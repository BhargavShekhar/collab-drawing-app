import { CircleType, LineType, RectangleType, ShapeType } from "../types";

function isInsideRectangle(
    x: number,
    y: number,
    rectangle: RectangleType
) {
    const left = Math.min(rectangle.startX, rectangle.startX + rectangle.width);
    const right = Math.max(rectangle.startX, rectangle.startX + rectangle.width);
    const top = Math.min(rectangle.startY, rectangle.startY + rectangle.height);
    const bottom = Math.max(rectangle.startY, rectangle.startY + rectangle.height);

    return (
        x >= left &&
        x <= right &&
        y >= top &&
        y <= bottom
    );
}


function isInsideCircle(
    x: number,
    y: number,
    circle: CircleType
) {
    const dx = x - circle.startX;
    const dy = y - circle.startY;

    const distanceSquared = dx * dx + dy * dy;
    return distanceSquared <= circle.radius * circle.radius;
}

function isInsideLine(
    x: number,
    y: number,
    line: LineType,
    tolerance = 5
) {
    const { startX, startY, endX, endY } = line;

    const dx = endX - startX;
    const dy = endY - startY;
    const lengthSquared = dx * dx + dy * dy;

    if (lengthSquared === 0) {
        const distSquared = (x - startX) ** 2 + (y - startY) ** 2;
        return distSquared <= tolerance * tolerance;
    }

    const t = ((x - startX) * dx + (y - startY) * dy) / lengthSquared;

    if (t < 0 || t > 1) return false;

    const projX = startX + t * dx;
    const projY = startY + t * dy;

    const distToLineSquared = (x - projX) ** 2 + (y - projY) ** 2;

    return distToLineSquared <= tolerance * tolerance;
}

export { isInsideRectangle, isInsideCircle, isInsideLine };