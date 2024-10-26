// THIS IS A HUGE DEMAND ON P2SR SERVERS DO NOT USE UNLESS NEEDED, THERE IS ALREADY A DB IN THE PROJECT WITH THIS DATA ALREADY
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { p2mapdata } from "./p2data.js";

async function Migrate(levelID) {
    try {
      const response = await fetch(`https://board.portal2.sr/chamber/${levelID}/json`);
      const data = await response.json();
  
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const entry = data[key];
          const { scoreData, userData } = entry;
  
  
          let existingUserData = await prisma.userData.findUnique({
            where: { boardname: userData.boardname },
          });
  
          if (!existingUserData) {
            existingUserData = await prisma.userData.create({
              data: {
                boardname: userData.boardname,
                avatar: userData.avatar,
              },
            });
          }
  
          const existingScoreData = await prisma.scoreData.findFirst({
            where: { changelogId: scoreData.changelogId },
          });
  
          let scoreDataId;
          if (existingScoreData) {
            scoreDataId = existingScoreData.id;
          } else {
            const newScoreData = await prisma.scoreData.create({
                data: {
                  note: scoreData.note,
                  submission: scoreData.submission,
                  changelogId: scoreData.changelogId,
                  playerRank: scoreData.playerRank,
                  scoreRank: scoreData.scoreRank,
                  score: scoreData.score,
                  date: new Date(scoreData.date),
                  hasDemo: scoreData.hasDemo === 1, // it inputs a 0 or 1 val instead of boolean this just reverses it
                  youtubeID: scoreData.youtubeID,
                  pending: scoreData.pending === 1, // it inputs a 0 or 1 val instead of boolean this just reverses it
                  autorender_id: scoreData.autorender_id,
                },
              });
              
              
            scoreDataId = newScoreData.id;
          }
  
          // Now create the Run with the existing user
          const newRun = await prisma.run.create({
            data: {
              scoreData: { connect: { id: scoreDataId } }, // Connect the existing or newly created scoreData
              userData: { connect: { id: existingUserData.id } },
              level: levelID,
            },
          });
  
          console.log(`Created Run:`, newRun);
        }
      }
  
      const runs = await prisma.run.findMany({
        where: { level: levelID },
        include: {
          scoreData: true,
          userData: true,
        },
      });
  
      console.log(runs);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  

async function migrateAll() {
  for (const map of p2mapdata) {
      await Migrate(map.BoardID);
  }
}

migrateAll();