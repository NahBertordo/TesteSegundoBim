-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idleilao" INTEGER NOT NULL,
    CONSTRAINT "Usuario_idleilao_fkey" FOREIGN KEY ("idleilao") REFERENCES "Leilao" ("indentificacao") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "indentificacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" TEXT NOT NULL,
    "listadelances" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "lenceleilao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iduser" INTEGER NOT NULL,
    "idleilao" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "Usuario" ("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_idleilao_fkey" FOREIGN KEY ("idleilao") REFERENCES "Leilao" ("indentificacao") ON DELETE RESTRICT ON UPDATE CASCADE
);
