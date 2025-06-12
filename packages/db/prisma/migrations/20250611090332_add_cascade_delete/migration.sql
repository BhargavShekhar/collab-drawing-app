-- DropForeignKey
ALTER TABLE "Circle" DROP CONSTRAINT "Circle_shapeId_fkey";

-- DropForeignKey
ALTER TABLE "Line" DROP CONSTRAINT "Line_shapeId_fkey";

-- DropForeignKey
ALTER TABLE "Rectangle" DROP CONSTRAINT "Rectangle_shapeId_fkey";

-- AddForeignKey
ALTER TABLE "Rectangle" ADD CONSTRAINT "Rectangle_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Circle" ADD CONSTRAINT "Circle_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;
