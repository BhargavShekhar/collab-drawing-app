/**
 * Converts screen mouse coordinates to world coordinates using camera offset.
 */
export function getWorldMouse(
    e: MouseEvent,
    cameraOffset: { x: number; y: number }
): { x: number; y: number } {
    return {
        x: e.clientX - cameraOffset.x,
        y: e.clientY - cameraOffset.y,
    };
}
