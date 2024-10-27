
import { PrismaClient } from '@prisma/client';
import ChangelogChart from "@/components/custom/ChangelogChart";
import ListScores from '@/components/custom/ListScores';

const prisma = new PrismaClient();

const runs = await prisma.run.findMany({
  where: { scoreData: { playerRank: 1 } },
  take: 20,
  orderBy: {
    scoreData: {
      date: 'desc'
    }
  },
  include: {
    scoreData: true,
    userData: true
  }
});

const chartData = [
  { day: "Monday", Submission: 186 },
  { day: "Tuesday", Submission: 305 },
  { day: "Wednesday", Submission: 237 },
  { day: "Thursday", Submission: 73 },
  { day: "Friday", Submission: 209 },
  { day: "Saturday", Submission: 214 },
  { day: "Sunday", Submission: 520}
]

export default function Page() {
  return (
    <>
      <ChangelogChart chartData={chartData} />
      <ListScores scores={runs} />
    </>
  );
}