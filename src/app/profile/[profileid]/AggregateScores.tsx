import { rankToPoints } from '@/lib/utils'
import { p2mapdata } from '@/lib/p2data';
import Link from 'next/link';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

enum RoleType {
    Legends = "Legends",
    Elite = "Elite",
    Professional = "Professional",
    Expert = "Expert",
    Intermediate = "Intermediate",
    Amateur = "Amateur",
    Beginner = "Beginner",
    Runner = "Runner"
}
  
enum ScoreType {
    SP = "sp",
    Overall = "overall",
    MP = "mp"
}
  
const thresholds = {
    [ScoreType.SP]: [
        11700,  // Legends
        11500,  // Elite
        10000,  // Professional
        7000,   // Expert
        5000,   // Intermediate
        3000,   // Amateur
        250,    // Beginner
        999999  // Runner (cannot obtain from SP)
    ],
    [ScoreType.MP]: [
        9450,   // Legends
        9300,   // Elite
        8000,   // Professional
        6000,   // Expert
        4500,   // Intermediate
        2000,   // Amateur
        1000,   // Beginner
        999999  // Runner (cannot obtain from MP)
    ],
    [ScoreType.Overall]: [
        21000,  // Legends
        20300,  // Elite
        17250,  // Professional
        12500,  // Expert
        999999, // Intermediate (cannot obtain from Overall)
        999999, // Amateur (cannot obtain from Overall)
        999999, // Beginner (cannot obtain from Overall)
        999999  // Runner (cannot obtain from Overall)
    ]
};
  
const roles = Object.values(RoleType);
  
function pointsToRank(points: number, type: ScoreType): RoleType | undefined {
    const idx = thresholds[type].findIndex(t => points >= t);
    return idx >= 0 ? roles[idx] : undefined;
}

interface PointsToRankComponentProps {
    points: number;
    runType: ScoreType;
}

const roleColors = {
    [RoleType.Legends]: "#0284c7",      // Choose color for Legends
    [RoleType.Elite]: "#dc2626",        // Choose color for Elite
    [RoleType.Professional]: "#22d3ee",  // Choose color for Professional
    [RoleType.Expert]: "#6d28d9",       // Choose color for Expert
    [RoleType.Intermediate]: "#15803d",  // Choose color for Intermediate
    [RoleType.Amateur]: "#34d399",      // Choose color for Amateur
    [RoleType.Beginner]: "#facc15",     // Choose color for Beginner
    [RoleType.Runner]: "#ffffff"        // Choose color for Runner
};

function PointsToRankComponent({ points, runType }: PointsToRankComponentProps) {
    const rank = pointsToRank(points, runType);
    const textColor = rank ? roleColors[rank] : "#ffffff";
    const delay = 100

    return (
        <HoverCard openDelay={delay} closeDelay={delay}>
            <HoverCardTrigger className="m-2 rounded-lg border p-2" style={{ color: textColor }}>TOTAL {runType.toUpperCase()} POINTS: <br /><strong>{points}</strong></HoverCardTrigger>
            <HoverCardContent style={{ color: textColor }}>
                Qualifies for {rank} Rank on <Link href='https://discord.gg/p2sr' className='underline underline-offset-2'>P2SR</Link>
            </HoverCardContent>
        </HoverCard>

    );
}

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
        <div className='w-fit h-fit flex flex-row justify-center *:text-center'>
            <PointsToRankComponent points={Math.round(totalScores.SP)} runType={ScoreType.SP} />
            <PointsToRankComponent points={Math.round(totalScores.Overall)} runType={ScoreType.Overall} />
            <PointsToRankComponent points={Math.round(totalScores.MP)} runType={ScoreType.MP} />
        </div>
    );
}