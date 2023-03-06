/*
  Warnings:

  - Made the column `submittedOn` on table `memo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `memo` MODIFY `submittedOn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
