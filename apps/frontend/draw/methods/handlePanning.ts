export function handlePanning(
    e: MouseEvent,
    startPanX: number,
    startPanY: number,
    initialCameraOffset: { x: number; y: number }
): { x: number; y: number } {
    const dx = e.clientX - startPanX;
    const dy = e.clientY - startPanY;

    return {
        x: initialCameraOffset.x + dx,
        y: initialCameraOffset.y + dy
    };
}

