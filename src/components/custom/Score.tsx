"use client"
import { idToLevel, scoreToTime } from "@/lib/utils";
import { MonitorPlay } from "lucide-react";
import Link from "next/link"

export interface ScoreProps {
  id: number;
  level: number;
  scoreDataId: number;
  userDataId: number;
  scoreData: {
    id: number;
    note: string | null;
    submission: number;
    changelogId: number;
    playerRank: number;
    scoreRank: number;
    score: number;
    date: string;
    hasDemo: number;
    youtubeID: string | null;
    pending: number;
    autorender_id: string;
  };
  userData: {
    id: number;
    boardname: string;
    avatar: string;
  };
}

export default function Score({ level, userDataId, scoreData, userData }: ScoreProps) {
  return (
    <div className="w-full p-2 border border-muted m-1 rounded-lg grid grid-cols-3 gap-2 items-center">
      <div className="col-span-1 flex items-center">
        <img 
          src={userData.avatar} 
          alt={`${userData.boardname}'s avatar`} 
          className="w-16 aspect-square rounded-full"
        />
        <Link className="ml-4 font-semibold truncate underline underline-offset-2" href={`/profile/${userDataId}`}>{userData.boardname}</Link>
      </div>
      <div className="col-span-2 grid grid-cols-5 gap-2 items-center">
          <span>{idToLevel(level)?.Name}</span>
          <span>{scoreToTime(scoreData.score)}</span>
          <span>Rank: <strong>{scoreData.playerRank}</strong></span>
          <span>Date: {new Date(scoreData.date).toLocaleDateString()}</span>
          {scoreData.autorender_id ? (
            <Link href={`https://autorender.p2sr.org/videos/${scoreData.autorender_id}`} className="flex items-center">
              <MonitorPlay />
            </Link>
          ) : <span />}
      </div>
    </div>
  );
}