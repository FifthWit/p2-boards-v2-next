-- CreateTable
CREATE TABLE `Run` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `scoreDataId` INTEGER NOT NULL,
    `userDataId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ScoreData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note` VARCHAR(191) NULL,
    `submission` INTEGER NOT NULL,
    `changelogId` INTEGER NOT NULL,
    `playerRank` INTEGER NOT NULL,
    `scoreRank` INTEGER NOT NULL,
    `score` INTEGER NOT NULL,
    `date` DATETIME(3) NULL,
    `hasDemo` BOOLEAN NOT NULL,
    `youtubeID` VARCHAR(191) NULL,
    `pending` BOOLEAN NOT NULL,
    `autorender_id` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `boardname` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,

    UNIQUE INDEX `UserData_boardname_key`(`boardname`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Changelog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time_gained` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `profile_number` VARCHAR(191) NOT NULL DEFAULT '',
    `score` INTEGER NOT NULL,
    `map_id` VARCHAR(191) NOT NULL DEFAULT '',
    `wr_gain` INTEGER NOT NULL DEFAULT 0,
    `has_demo` INTEGER NULL DEFAULT 0,
    `banned` INTEGER NOT NULL DEFAULT 0,
    `youtube_id` VARCHAR(191) NULL,
    `previous_id` INTEGER NULL,
    `post_rank` INTEGER NULL,
    `pre_rank` INTEGER NULL,
    `submission` INTEGER NOT NULL DEFAULT 0,
    `note` VARCHAR(191) NULL,
    `pending` BOOLEAN NOT NULL DEFAULT false,

    INDEX `Changelog_profile_number_idx`(`profile_number`),
    INDEX `Changelog_map_id_idx`(`map_id`),
    INDEX `Changelog_previous_id_idx`(`previous_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chapters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chapter_name` VARCHAR(191) NULL,
    `is_multiplayer` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EvidenceRequirements` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rank` INTEGER NOT NULL,
    `demo` BOOLEAN NOT NULL,
    `video` BOOLEAN NOT NULL,
    `active` BOOLEAN NOT NULL,
    `timestamp` DATETIME(3) NOT NULL,
    `closed_timestamp` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exceptions` (
    `map_id` VARCHAR(191) NOT NULL,
    `legit_score` INTEGER NOT NULL,
    `curl` INTEGER NOT NULL DEFAULT 18,

    PRIMARY KEY (`map_id`, `legit_score`, `curl`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Maps` (
    `id` INTEGER NOT NULL,
    `steam_id` VARCHAR(191) NOT NULL DEFAULT '',
    `lp_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL DEFAULT 'time',
    `chapter_id` INTEGER NULL,
    `is_coop` INTEGER NOT NULL DEFAULT 0,
    `is_public` INTEGER NOT NULL DEFAULT 1,

    UNIQUE INDEX `Maps_steam_id_key`(`steam_id`),
    INDEX `Maps_chapter_id_idx`(`chapter_id`),
    INDEX `Maps_is_public_idx`(`is_public`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Scores` (
    `changelog_id` INTEGER NOT NULL,
    `profile_number` VARCHAR(191) NOT NULL,
    `map_id` VARCHAR(191) NOT NULL,

    INDEX `Scores_map_id_idx`(`map_id`),
    INDEX `Scores_profile_number_idx`(`profile_number`),
    UNIQUE INDEX `Scores_profile_number_map_id_key`(`profile_number`, `map_id`),
    PRIMARY KEY (`changelog_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UsersNew` (
    `profile_number` VARCHAR(191) NOT NULL,
    `boardname` VARCHAR(191) NULL,
    `steamname` VARCHAR(191) NULL,
    `banned` INTEGER NOT NULL DEFAULT 0,
    `registered` INTEGER NOT NULL DEFAULT 0,
    `avatar` VARCHAR(191) NULL,
    `twitch` VARCHAR(191) NULL,
    `youtube` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `admin` INTEGER NOT NULL DEFAULT 0,
    `donation_amount` VARCHAR(191) NULL,
    `auth_hash` VARCHAR(191) NULL,

    PRIMARY KEY (`profile_number`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Run` ADD CONSTRAINT `Run_scoreDataId_fkey` FOREIGN KEY (`scoreDataId`) REFERENCES `ScoreData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Run` ADD CONSTRAINT `Run_userDataId_fkey` FOREIGN KEY (`userDataId`) REFERENCES `UserData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
