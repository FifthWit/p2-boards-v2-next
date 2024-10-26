import { idToLevel } from "@/lib/utils";
import ListScores from "@/components/custom/ListScores";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function Level({ params }) {
  const { levelid } = await params;
  const levelData = idToLevel(levelid);

  const scores = await prisma.run.findMany({
    where: { level: parseInt(levelid) },
    take: 40,
    include: {
      scoreData: true,
      userData: true
    }
  });

  if (!levelData) {
    return (
      <div>
        <h1>Map Level: {levelid}</h1>
        <p>Level data not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
        <div className="w-4/5 flex flex-col justify-center items-center">
            <div className="relative">
            <div className="overflow-hidden">
            <img 
                src={`https://board.portal2.sr/images/chambers_full/${levelid}.jpg`} 
                alt={`Level ${levelid}`} 
                className="w-full aspect-video object-cover blur-[5px]"/>
            </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">{levelData.Name}</h1>
                </div>
            </div>
            <ListScores scores={scores} />
        </div>
    </div>
);
}