/*
  Warnings:

  - Made the column `updatedAt` on table `Education` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `SkillModules` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Homepage` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "school" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Education" ("createdAt", "description", "endDate", "id", "name", "school", "startDate", "updatedAt") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "description", "endDate", "id", "name", "school", "startDate", "updatedAt" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE TABLE "new_SkillModules" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "skillId" INTEGER NOT NULL,
    CONSTRAINT "SkillModules_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SkillModules" ("createdAt", "description", "id", "name", "skillId", "updatedAt") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "description", "id", "name", "skillId", "updatedAt" FROM "SkillModules";
DROP TABLE "SkillModules";
ALTER TABLE "new_SkillModules" RENAME TO "SkillModules";
CREATE TABLE "new_Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Message" ("createdAt", "email", "id", "message", "name", "updatedAt") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "email", "id", "message", "name", "updatedAt" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
CREATE TABLE "new_Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "description" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "instagram" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Contact" ("createdAt", "description", "email", "github", "id", "instagram", "linkedin", "phone", "updatedAt") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "description", "email", "github", "id", "instagram", "linkedin", "phone", "updatedAt" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
CREATE TABLE "new_Homepage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Homepage" ("color", "createdAt", "id", "meta", "title", "updatedAt") SELECT "color", coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "id", "meta", "title", "updatedAt" FROM "Homepage";
DROP TABLE "Homepage";
ALTER TABLE "new_Homepage" RENAME TO "Homepage";
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "html" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "jobId" INTEGER,
    CONSTRAINT "Project_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "description", "html", "id", "jobId", "name", "updatedAt", "url") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "description", "html", "id", "jobId", "name", "updatedAt", "url" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "credential" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Skill" ("createdAt", "credential", "description", "id", "name", "updatedAt") SELECT coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "credential", "description", "id", "name", "updatedAt" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
CREATE TABLE "new_Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "business" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Job" ("business", "createdAt", "description", "endDate", "id", "name", "office", "startDate", "updatedAt") SELECT "business", coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "description", "endDate", "id", "name", "office", "startDate", "updatedAt" FROM "Job";
DROP TABLE "Job";
ALTER TABLE "new_Job" RENAME TO "Job";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "contactId" INTEGER NOT NULL,
    "jobId" INTEGER,
    CONSTRAINT "User_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "User_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("contactId", "createdAt", "email", "id", "jobId", "name", "password", "updatedAt") SELECT "contactId", coalesce("createdAt", CURRENT_TIMESTAMP) AS "createdAt", "email", "id", "jobId", "name", "password", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_contactId_key" ON "User"("contactId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
