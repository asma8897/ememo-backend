/*
  Warnings:

  - Made the column `name` on table `group` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subject` on table `memo` required. This step will fail if there are existing NULL values in that column.
  - Made the column `content` on table `memo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `group` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `memo` MODIFY `subject` VARCHAR(191) NOT NULL,
    MODIFY `content` LONGTEXT NOT NULL,
    MODIFY `executiveChairman` BOOLEAN NULL;
