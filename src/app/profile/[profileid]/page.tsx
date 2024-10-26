import ListScores from "@/components/custom/ListScores";
import { PrismaClient } from "@prisma/client";
import Change from "@/components/custom/ChangelogChart";
import Link from "next/link";
import { Twitch } from 'lucide-react';

interface ScoreData {
    day: string
    Submission: number
}

const prisma = new PrismaClient();

const fetchChartData = async (profileId: number): Promise<ScoreData[]> => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const runs = await prisma.run.findMany({
    where: {
      userDataId: profileId,
      scoreData: {
        date: {
          gte: sevenDaysAgo,
        },
      },
    },
    include: {
      scoreData: true,
    },
  }); console.log(runs)

  const aggregatedData = runs.reduce((acc, run) => {
    const day = run.scoreData.date?.toLocaleDateString('en-US', { weekday: 'long' });
    if (!acc[day]) {
      acc[day] = { day, Submission: 0 };
    }
    acc[day].Submission += run.scoreData.submission;
    return acc;
  }, {} as Record<string, ScoreData>);

  return Object.values(aggregatedData);
};

export default async function Profile({ params }) {
  const profile = await params;
  const profileId = parseInt(profile.profileid);

  const profileData = await prisma.userData.findUnique({
    where: { id: profileId },
  });

  const profileRuns = await prisma.run.findFirstOrThrow({
    where: { userDataId: profileId },
    include: {
      scoreData: true,
      userData: true,
    },
  });

  if (!profileRuns || profileRuns.length === 0) {
    return (
      <div>
        <p>Profile data not found.</p>
      </div>
    );
  }

  const chartData = await fetchChartData(profileId);

  return (
    <div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row items-center *:m-2 w-fit">
          <img src={profileData?.avatar ?? ""} alt="" className="rounded-full" />
          <div className="flex flex-col">
            <h4 className="text-4xl font-semibold">{profileData?.boardname}</h4>
            <p className="text-muted-foreground">ProfileID: {profileData?.id}</p>
            <div className="flex flex-row *:m-0.5">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-purple-600 w-8 aspect-square rounded-md p-0.5 flex items-center">
                    <Twitch />
                </div>
            ))}
            </div>
          </div>
        </div>
        {/* Havent added actual data fetching for this yet so this more or less a copy of RealCreative's points as of 10/25/24 */}
        <div className="grid grid-rows-2 gap-2 text-center">
            <div className="grid grid-cols-3 gap-2">
                <div className="w-20">Best SP Rank 2nd on many chambers</div>
                <div className="w-20">Best Rank 1st on many chambers</div>
                <div className="w-20">Best Coop Rank 1st on many chambers</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="w-20">SP Points <strong className="text-red-500">11561</strong></div>
                <div className="w-20">Overall Points <strong className="text-red-500">20613</strong></div>
                <div className="w-20">Coop Points <strong className="text-blue-500">9457</strong></div>
            </div>
        </div>
        <Change chartData={chartData} />
      </div>
      scores would be below


      {/* <h1>Map Profile: {JSON.stringify(profileData)}</h1> */}
    </div>
  );
}