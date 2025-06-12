/*
  Warnings:

  - The primary key for the `Circle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Rectangle` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Circle" DROP CONSTRAINT "Circle_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Circle_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Circle_id_seq";

-- AlterTable
ALTER TABLE "Rectangle" DROP CONSTRAINT "Rectangle_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Rectangle_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Rectangle_id_seq";
