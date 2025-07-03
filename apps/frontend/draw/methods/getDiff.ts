import { ShapeType } from "../types";
import { getShapeMap } from "./getShapeMap";

export function getDiff(
    prevShapes: ShapeType[],
    currShapes: ShapeType[]
) {
    const prevMap = getShapeMap(prevShapes);
    const currMap = getShapeMap(currShapes);

    const added: ShapeType[] = [];
    const removed: ShapeType[] = [];
    const modified: ShapeType[] = [];

    for (const [key, currShape] of currMap.entries()) {
        if (!prevMap.has(key)) added.push(currShape);
        else {
            const prevShape = prevMap.get(key);
            if (JSON.stringify(prevShape) != JSON.stringify(currShape)) modified.push(currShape);
        }
    }

    for (const [key, shape] of prevMap.entries()) {
        if (!currMap.has(key)) removed.push(shape);
    }

    return { added, removed, modified };
}