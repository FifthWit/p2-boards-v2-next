// DELETES ALL DB RECORD DO NOT USE UNLESS YOU KNOW WHAT YOU'RE DOING! 

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllData() {
    try {
        await prisma.run.deleteMany(); 
        await prisma.scoreData.deleteMany();
        await prisma.userData.deleteMany();
        
        console.log("All data deleted successfully.");
    } catch (error) {
        console.error("Error deleting data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

deleteAllData();
