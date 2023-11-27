-- CreateTable
CREATE TABLE "Usuario" (
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Leilao" (
    "produto" TEXT NOT NULL PRIMARY KEY,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "emailDono" TEXT NOT NULL,
    "listadelances" TEXT NOT NULL,
    CONSTRAINT "Leilao_emailDono_fkey" FOREIGN KEY ("emailDono") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lance" (
    "emailDono" TEXT NOT NULL PRIMARY KEY,
    "produtoLeilao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_emailDono_fkey" FOREIGN KEY ("emailDono") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_produtoLeilao_fkey" FOREIGN KEY ("produtoLeilao") REFERENCES "Leilao" ("produto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Leilao_emailDono_key" ON "Leilao"("emailDono");

-- CreateIndex
CREATE UNIQUE INDEX "Lance_emailDono_key" ON "Lance"("emailDono");
