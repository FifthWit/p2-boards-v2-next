/*
  Warnings:

  - A unique constraint covering the columns `[boardname]` on the table `UserData` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserData_boardname_key" ON "UserData"("boardname");
