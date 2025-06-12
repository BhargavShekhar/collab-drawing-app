/*
  Warnings:

  - You are about to drop the column `circleId` on the `Shape` table. All the data in the column will be lost.
  - You are about to drop the column `rectId` on the `Shape` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shapeId]` on the table `Circle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shapeId]` on the table `Rectangle` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shapeId` to the `Circle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shapeId` to the `Rectangle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Shape` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StringType" AS ENUM ('Rectangle', 'Circle');

-- DropForeignKey
ALTER TABLE "Shape" DROP CONSTRAINT "Shape_circleId_fkey";

-- DropForeignKey
ALTER TABLE "Shape" DROP CONSTRAINT "Shape_rectId_fkey";

-- AlterTable
ALTER TABLE "Circle" ADD COLUMN     "shapeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Rectangle" ADD COLUMN     "shapeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shape" DROP COLUMN "circleId",
DROP COLUMN "rectId",
ADD COLUMN     "type" "StringType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Circle_shapeId_key" ON "Circle"("shapeId");

-- CreateIndex
CREATE UNIQUE INDEX "Rectangle_shapeId_key" ON "Rectangle"("shapeId");

-- CreateIndex
CREATE INDEX "Shape_roomId_idx" ON "Shape"("roomId");

-- CreateIndex
CREATE INDEX "Shape_userId_idx" ON "Shape"("userId");

-- AddForeignKey
ALTER TABLE "Rectangle" ADD CONSTRAINT "Rectangle_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
