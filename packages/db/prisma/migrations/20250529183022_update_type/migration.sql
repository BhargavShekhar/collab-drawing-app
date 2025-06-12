/*
  Warnings:

  - The primary key for the `Shape` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Circle" DROP CONSTRAINT "Circle_shapeId_fkey";

-- DropForeignKey
ALTER TABLE "Rectangle" DROP CONSTRAINT "Rectangle_shapeId_fkey";

-- AlterTable
ALTER TABLE "Circle" ALTER COLUMN "shapeId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Rectangle" ALTER COLUMN "shapeId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Shape" DROP CONSTRAINT "Shape_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Shape_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Shape_id_seq";

-- AddForeignKey
ALTER TABLE "Rectangle" ADD CONSTRAINT "Rectangle_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
