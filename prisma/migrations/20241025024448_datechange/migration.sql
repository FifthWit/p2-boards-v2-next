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
    "hasDemo" INTEGER NOT NULL,
    "youtubeID" TEXT,
    "pending" INTEGER NOT NULL,
    "autorender_id" TEXT
);
INSERT INTO "new_ScoreData" ("autorender_id", "changelogId", "date", "hasDemo", "id", "note", "pending", "playerRank", "score", "scoreRank", "submission", "youtubeID") SELECT "autorender_id", "changelogId", "date", "hasDemo", "id", "note", "pending", "playerRank", "score", "scoreRank", "submission", "youtubeID" FROM "ScoreData";
DROP TABLE "ScoreData";
ALTER TABLE "new_ScoreData" RENAME TO "ScoreData";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
