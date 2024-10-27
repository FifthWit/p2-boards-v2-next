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
        <ListScores scores={scores} hideLink={true} hideMap={true}/>
        </div>
    </div>
  );
}