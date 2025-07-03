import { ShapeType } from "../types";
import { getShapeId } from "./getShapeId";

export function getShapeMap(shapes: ShapeType[]) {
    const map = new Map<string, ShapeType>();

    for(const shape of shapes) {
        map.set(getShapeId(shape), shape);
    }

    return map;
}