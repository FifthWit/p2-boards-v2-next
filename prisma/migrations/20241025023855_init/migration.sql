-- CreateTable
CREATE TABLE "Run" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" INTEGER NOT NULL,
    "scoreDataId" INTEGER NOT NULL,
    "userDataId" INTEGER NOT NULL,
    CONSTRAINT "Run_scoreDataId_fkey" FOREIGN KEY ("scoreDataId") REFERENCES "ScoreData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Run_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "UserData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ScoreData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "note" TEXT,
    "submission" INTEGER NOT NULL,
    "changelogId" INTEGER NOT NULL,
    "playerRank" INTEGER NOT NULL,
    "scoreRank" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "hasDemo" INTEGER NOT NULL,
    "youtubeID" TEXT,
    "pending" INTEGER NOT NULL,
    "autorender_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "boardname" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Run_scoreDataId_key" ON "Run"("scoreDataId");

-- CreateIndex
CREATE UNIQUE INDEX "Run_userDataId_key" ON "Run"("userDataId");
