"use client"
import { useState, useEffect } from "react"
import { idToLevel, rankToPoints, scoreToTime } from "@/lib/utils";
import { MonitorPlay } from "lucide-react";
import Link from "next/link"
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  hideLink?: boolean
  hideMap?: boolean
}

export default function Score({ level, userDataId, scoreData, userData, hideLink = false, hideMap = false }: ScoreProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const delay: number = 100;

  if (isMobile) {
    return (
      <Accordion type="single" collapsible className="border m-2 rounded-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-2">
            <div className="flex flex-row items-center">
              <Image
              width={64}
              height={64}
              src={userData.avatar}
              alt={`${userData.boardname}'s avatar`}
              className="w-16 aspect-square rounded-full"
              />
              <Link className="ml-4 font-semibold truncate underline underline-offset-2" href={`/profile/${userDataId}`}>
                {userData.boardname}
              </Link>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-2">
            <div className="col-span-2 grid grid-cols-5 gap-2 items-center">
              <span>{scoreData.playerRank}</span>
              {!hideMap && (
                hideLink ? (
                  <span>{idToLevel(level)?.Name}</span>
                ) : (
                  <Link href={`/maps/${level}`}>{idToLevel(level)?.Name}</Link>
                )
              )}
              <span>{scoreToTime(scoreData.score)}</span>
              <span>Date: {new Date(scoreData.date).toLocaleDateString()}</span>
              {scoreData.autorender_id ? (
                <Link href={`https://autorender.p2sr.org/videos/${scoreData.autorender_id}`} className="flex items-center">
                  <MonitorPlay />
                </Link>
              ) : <span />}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="w-full p-2 border border-muted m-1 rounded-lg grid grid-cols-3 gap-2 items-center">
      <div className="col-span-1 flex items-center">
        <Image
          width={64}
          height={64}
          src={userData.avatar}
          alt={`${userData.boardname}'s avatar`}
          className="w-16 aspect-square rounded-full"
        />
        <Link className="ml-4 font-semibold truncate underline underline-offset-2" href={`/profile/${userDataId}`}>
          {userData.boardname}
        </Link>
      </div>
      <div className="col-span-2 grid grid-cols-5 gap-2 items-center">
        {!hideMap && (
          hideLink ? (
            <span>{idToLevel(level)?.Name}</span>
          ) : (
            <Link href={`/maps/${level}`}>{idToLevel(level)?.Name}</Link>
          )
        )}
        <span>{scoreToTime(scoreData.score)}</span>
        <HoverCard openDelay={delay} closeDelay={delay}>
          <HoverCardTrigger>{scoreData.playerRank}</HoverCardTrigger>
          <HoverCardContent className="w-fit h-fit p-2" align="start" side="left" alignOffset={-10}>
            {rankToPoints(scoreData.playerRank)} Points
          </HoverCardContent>
        </HoverCard>
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