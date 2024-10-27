import { rankToPoints } from '@/lib/utils'
import { p2mapdata } from '@/lib/p2data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function AggregateScores({ id }: { id: number }) {
    const runs = await prisma.run.findMany({
        where: {
          userDataId: id
        },
        select: {
            scoreData: {
                select: {
                  playerRank: true
                }
              },
          level: true
        }
      });
      let totalScores = {
        SP: 0,
        Overall: 0,
        MP: 0,
      }
      
      for (const run of runs) {
        const mapData = p2mapdata.find(data => data.BoardID === run.level);
        
        if (mapData) {
          const points = rankToPoints(run.scoreData.playerRank);
          
          totalScores.Overall += points;
          
          if (mapData.Coop) {
            totalScores.MP += points;
          } else {
            totalScores.SP += points;
          }
        }
      }

    return (
        <div>
            <strong>{JSON.stringify(Math.round(totalScores.Overall))}</strong>
        </div>
    );
}