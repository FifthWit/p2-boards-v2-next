import { idToLevel } from "@/lib/utils";
import ListScores from "@/components/custom/ListScores";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
const prisma = new PrismaClient();
interface Props {
  params: Promise<{
    levelid: string;
  }>;
}
export default async function Page({ params }: Props) {
  const { levelid } = await params;
  const levelData = idToLevel(parseInt(levelid));
  
  async function getScores(levelid: string) {
    // Fetch scores from changelog
    const scores = await prisma.changelog.findMany({
      where: {
        map_id: levelid,
        score: {
          not: undefined
        },
        post_rank: {
          not: null
        },
        pending: false,
        banned: 0
      },
      orderBy: {
        score: 'asc'
      },
      distinct: ['profile_number'],
    });
  
    // Extract profile numbers from the scores
    const profileNumbers = scores.map(score => score.profile_number);
  
    // Fetch corresponding user data
    const userData = await prisma.usersNew.findMany({
      where: {
        profile_number: {
          in: profileNumbers
        },
        banned: 0
      }
    });
  
    // Create a map of user data for easy access
    const userDataMap = userData.reduce((acc, user) => {
      acc[user.profile_number] = user;
      return acc;
    }, {} as Record<string, typeof userData[0]>);
  
    // Filter out scores where the user is banned or not found
    const filteredScores = scores.filter(score => userDataMap[score.profile_number]);
    
    // Calculate ranks properly
    let position = 0;
    
    const scoresWithUserData = filteredScores.map((score, index) => {
      // If this is the first score or if it's different from the previous score
      if (index === 0 || score.score !== filteredScores[index - 1].score) {
        position = index + 1;
      }
      
      return {
        ...score,
        currentRank: position,
        score: score.score,
        userData: userDataMap[score.profile_number]
      };
    });

    // Remove scores with rank above 500
    const finalScores = scoresWithUserData.filter(score => score.currentRank <= 500);
  
    return finalScores;
}

  const scores = await getScores(levelid);

  if (!levelData) {
    return (
      <div>
        <>
          <h1>Map Level: {levelid}</h1>
          <p>Level data not found.</p>
        </>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center">
        <div className="w-4/5 flex flex-col justify-center items-center">
        <div className="relative">
          <div className="overflow-hidden">
          <Image
            src={`https://board.portal2.sr/images/chambers_full/${levelid}.jpg`}
            alt={`Level ${levelid}`}
            width={1280}
            height={720}
            className="w-full aspect-video object-cover blur-[3px]"
            unoptimized
          />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-7xl font-bold">{levelData.Name}</h1>
          </div>
            {idToLevel(levelid)?.Name && (
              <Link href={`https://wiki.portal2.sr/${idToLevel(levelid)?.Name.replace(/ /g, '_')}`} className="absolute bottom-0 left-0 m-4 text-lg bg-background px-4 p-0.5 text-center rounded-lg">
                Wiki
              </Link>
            )}
        </div>
        {/* {JSON.stringify(scores)} */}
        <ListScores scores={scores} hideLink={true} hideMap={true}/>
        </div>
    </div>
  );
}