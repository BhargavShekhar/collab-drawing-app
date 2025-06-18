// Shapes type
export type RectangleType = {
  id: string;
  startX: number;
  startY: number;
  width: number;
  height: number;
  isMoving?: boolean;
}

export type CircleType = {
  id: string;
  startX: number;
  startY: number;
  radius: number;
  isMoving?: boolean;
}

export type LineType = {
  id: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  isMoving?: boolean;
}

type BaseShape = {
  type: 'Rectangle' | 'Circle' | 'Line';  // toolType
  roomId: number;
};

type RectangleShape = BaseShape & {
  Rectangle: RectangleType;
  Circle: null;
  Line: null;
};

type CircleShape = BaseShape & {
  Circle: CircleType;
  Rectangle: null;
  Line: null;
};

type LineShape = BaseShape & {
  Line: LineType;
  Rectangle: null;
  Circle: null;
}

export type ShapeType = RectangleShape | CircleShape | LineShape;

// Tool Types
export enum toolType {
  pointer = "pointer",
  rectangle = "rectangle",
  circle = "circle",
  line = "line",
  select = "select",
  undo = "undo",
  redo = "redo"
}

export interface toolsInterface {
  id: toolType,
  icon: React.ReactNode
}

// App State Type
export type AppState = {
  shapes: ShapeType[]
}
