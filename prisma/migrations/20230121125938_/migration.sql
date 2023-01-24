/*
  Warnings:

  - The primary key for the `municipios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `municipios` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_municipios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_municipios" ("id", "name") SELECT "id", "name" FROM "municipios";
DROP TABLE "municipios";
ALTER TABLE "new_municipios" RENAME TO "municipios";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
