/*
  Warnings:

  - You are about to alter the column `hasDemo` on the `ScoreData` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.
  - You are about to alter the column `pending` on the `ScoreData` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Boolean`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScoreData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "note" TEXT,
    "submission" INTEGER NOT NULL,
    "changelogId" INTEGER NOT NULL,
    "playerRank" INTEGER NOT NULL,
    "scoreRank" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "date" DATETIME,
    "hasDemo" BOOLEAN NOT NULL,
    "youtubeID" TEXT,
    "pending" BOOLEAN NOT NULL,
    "autorender_id" TEXT
);
INSERT INTO "new_ScoreData" ("autorender_id", "changelogId", "date", "hasDemo", "id", "note", "pending", "playerRank", "score", "scoreRank", "submission", "youtubeID") SELECT "autorender_id", "changelogId", "date", "hasDemo", "id", "note", "pending", "playerRank", "score", "scoreRank", "submission", "youtubeID" FROM "ScoreData";
DROP TABLE "ScoreData";
ALTER TABLE "new_ScoreData" RENAME TO "ScoreData";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
