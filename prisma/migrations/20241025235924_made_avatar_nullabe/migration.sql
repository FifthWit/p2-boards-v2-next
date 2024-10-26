-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "boardname" TEXT NOT NULL,
    "avatar" TEXT
);
INSERT INTO "new_UserData" ("avatar", "boardname", "id") SELECT "avatar", "boardname", "id" FROM "UserData";
DROP TABLE "UserData";
ALTER TABLE "new_UserData" RENAME TO "UserData";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
