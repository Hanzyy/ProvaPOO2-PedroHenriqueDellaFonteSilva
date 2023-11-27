/*
  Warnings:

  - The primary key for the `Lance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `produtoLeilao` on the `Lance` table. All the data in the column will be lost.
  - The primary key for the `Leilao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Lance` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idLeilao` to the `Lance` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Leilao` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailDono" TEXT NOT NULL,
    "idLeilao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_emailDono_fkey" FOREIGN KEY ("emailDono") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_idLeilao_fkey" FOREIGN KEY ("idLeilao") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("emailDono", "valor") SELECT "emailDono", "valor" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
CREATE UNIQUE INDEX "Lance_id_key" ON "Lance"("id");
CREATE UNIQUE INDEX "Lance_emailDono_key" ON "Lance"("emailDono");
CREATE TABLE "new_Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "emailDono" TEXT NOT NULL,
    "listadelances" TEXT NOT NULL,
    CONSTRAINT "Leilao_emailDono_fkey" FOREIGN KEY ("emailDono") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("datalimite", "emailDono", "listadelances", "preco", "produto") SELECT "datalimite", "emailDono", "listadelances", "preco", "produto" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
CREATE UNIQUE INDEX "Leilao_id_key" ON "Leilao"("id");
CREATE UNIQUE INDEX "Leilao_emailDono_key" ON "Leilao"("emailDono");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
