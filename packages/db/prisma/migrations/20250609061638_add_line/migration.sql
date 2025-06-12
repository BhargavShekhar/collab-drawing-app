-- AlterEnum
ALTER TYPE "StringType" ADD VALUE 'Line';

-- CreateTable
CREATE TABLE "Line" (
    "id" TEXT NOT NULL,
    "shapeId" TEXT NOT NULL,
    "startX" INTEGER NOT NULL,
    "startY" INTEGER NOT NULL,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Line_shapeId_key" ON "Line"("shapeId");

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
