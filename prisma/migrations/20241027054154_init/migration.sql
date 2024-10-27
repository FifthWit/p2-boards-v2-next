-- CreateTable
CREATE TABLE "Run" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "scoreDataId" INTEGER NOT NULL,
    "userDataId" INTEGER NOT NULL,

    CONSTRAINT "Run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScoreData" (
    "id" SERIAL NOT NULL,
    "note" TEXT,
    "submission" INTEGER NOT NULL,
    "changelogId" INTEGER NOT NULL,
    "playerRank" INTEGER NOT NULL,
    "scoreRank" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "date" TIMESTAMP(3),
    "hasDemo" BOOLEAN NOT NULL,
    "youtubeID" TEXT,
    "pending" BOOLEAN NOT NULL,
    "autorender_id" TEXT,

    CONSTRAINT "ScoreData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserData" (
    "id" SERIAL NOT NULL,
    "boardname" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_boardname_key" ON "UserData"("boardname");

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_scoreDataId_fkey" FOREIGN KEY ("scoreDataId") REFERENCES "ScoreData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
