/*
  Warnings:

  - You are about to drop the `run` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `scoredata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `run` DROP FOREIGN KEY `Run_scoreDataId_fkey`;

-- DropForeignKey
ALTER TABLE `run` DROP FOREIGN KEY `Run_userDataId_fkey`;

-- DropTable
DROP TABLE `run`;

-- DropTable
DROP TABLE `scoredata`;

-- DropTable
DROP TABLE `userdata`;
