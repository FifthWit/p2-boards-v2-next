import { PrismaClient } from "@prisma/client";
import Change from "@/components/custom/ChangelogChart";
import { Twitch } from 'lucide-react';
import AggregateScores from "./AggregateScores";

interface ScoreData {
    day: string
    Submission: number
}

const prisma = new PrismaClient();

const fetchChartData = async (profileId: {id: number}): Promise<ScoreData[]> => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const runs = await prisma.run.findMany({
    where: {
      userDataId: profileId.id,
      scoreData: {
        date: {
          gte: sevenDaysAgo,
        },
      },
    },
    include: {
      scoreData: true,
    },
  });

  const aggregatedData = runs.reduce((acc, run) => {
    const date = run.scoreData.date;
    if (!date) return acc;
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    if (!acc[day]) {
      acc[day] = { day, Submission: 0 };
    }
    acc[day].Submission += run.scoreData.submission;
    return acc;
  }, {} as Record<string, ScoreData>);

  return Object.values(aggregatedData);
};

interface ProfileParams {
  profileid: string;
}

export default async function Profile({ params }: { params: ProfileParams }) {
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

  if (!profileRuns) {
    return (
      <div>
        <p>Profile data not found.</p>
      </div>
    );
  }

  const chartData = await fetchChartData({ id: profileId });

  return (
    <div>
      <div className="flex flex-row w-full *:w-1/3">
        <div className="flex flex-row items-center *:m-2">
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
            
          <AggregateScores id={profileId} />

        <Change chartData={chartData} className="w-1/3" />
      </div>
      scores would be below
    </div>
  );
}