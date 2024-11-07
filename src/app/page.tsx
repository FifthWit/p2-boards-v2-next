import { PrismaClient } from '@prisma/client';
import ChangelogChart from "@/components/custom/ChangelogChart";
import ListScores from '@/components/custom/ListScores';

const prisma = new PrismaClient();

async function getRuns() {
  const runs = await prisma.changelog.findMany({
    take: 20,
    orderBy: {
      time_gained: 'desc'
    }
  });

  const profileNumbers = runs.map(run => run.profile_number);
  const userData = await prisma.usersNew.findMany({
    where: {
      profile_number: {
        in: profileNumbers
      }
    }
  });

  const userDataMap = userData.reduce((acc: { [key: string]: typeof userData[0] }, user) => {
    acc[user.profile_number] = user;
    return acc;
  }, {});

  const runsWithUserData = runs.map(run => ({
    ...run,
    userData: userDataMap[run.profile_number]
  }));

  return runsWithUserData;
}

const chartData = [
  { day: "Monday", Submission: 186 },
  { day: "Tuesday", Submission: 305 },
  { day: "Wednesday", Submission: 237 },
  { day: "Thursday", Submission: 73 },
  { day: "Friday", Submission: 209 },
  { day: "Saturday", Submission: 214 },
  { day: "Sunday", Submission: 520 }
];

export default async function Page() {
  const runsWithUserData = await getRuns();
  return (
    <>
      <ChangelogChart chartData={chartData} />
      {/* <p>{JSON.stringify(runsWithUserData)}</p> */}
      <ListScores scores={runsWithUserData} />
    </>
  );
}