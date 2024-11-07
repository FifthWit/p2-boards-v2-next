'use client';
import { idToLevel, rankToPoints, scoreToTime } from '@/lib/utils';
// import { MonitorPlay } from "lucide-react"; will add when autorender integration is working
import Link from 'next/link';
import Image from 'next/image';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';

export interface ScoreProps {
    currentRank?: number;
    useIndex?: boolean;
    hideLink: boolean;
    hideMap: boolean;
    id: number;
    time_gained: string;
    profile_number: Date;
    score: number;
    map_id: string;
    wr_gain: number;
    has_demo: number;
    banned: number;
    youtube_id: string | null;
    previous_id: number;
    post_rank: number;
    pre_rank: number;
    submission: number;
    note: string;
    pending: boolean;
    userData: {
        profile_number: string;
        boardname: string | null;
        steamname: string;
        banned: number;
        registered: number;
        avatar: string;
        twitch: string | null;
        youtube: string | null;
        title: string | null;
        admin: number;
        donation_amount: number | null;
        auth_hash: string | null;
    };
}

export default function Score(props: ScoreProps) {
    const delay: number = 100;

    return (
        <div className="w-full p-2 border border-muted m-1 rounded-lg grid grid-cols-3 gap-2 items-center score">
            <div className="col-span-1 flex items-center">
                <Image
                    width={64}
                    height={64}
                    src={props.userData.avatar}
                    alt={`${props.userData.boardname || props.userData.steamname}'s avatar`}
                    className="w-16 aspect-square rounded-full"
                />
                <Link
                    className="ml-4 font-semibold truncate underline underline-offset-2"
                    href={`/profile/${props.userData.profile_number}`}
                >
                    {props.userData.boardname || props.userData.steamname}
                </Link>
            </div>
            <div className="col-span-2 grid grid-cols-5 gap-2 items-center">
                {!props.hideMap &&
                    (props.hideLink ? (
                        <span>{idToLevel(props.map_id)?.Name}</span>
                    ) : (
                        <Link
                            className="underline"
                            href={`/maps/${props.map_id}`}
                        >
                            {idToLevel(props.map_id)?.Name}
                        </Link>
                    ))}
                <span>{scoreToTime(props.score)}</span>
                <HoverCard openDelay={delay} closeDelay={delay}>
                    <HoverCardTrigger>{props.currentRank}</HoverCardTrigger>
                    <HoverCardContent
                        className="w-fit h-fit p-2"
                        align="start"
                        side="left"
                        alignOffset={-10}
                    >
                        {Math.round(rankToPoints(props.post_rank))} Points
                    </HoverCardContent>
                </HoverCard>
                <span>{new Date(props.time_gained).toLocaleDateString()}</span>
                {/* {props.autorender_id ? (
          <Link href={`https://autorender.p2sr.org/videos/${props.autorender_id}`} className="flex items-center">
            <MonitorPlay />
          </Link>
        ) : <span />} */}
                {/* Uhhh, data is from an old dump in May before the autorender_id got added iirc so if I ever get my hands on the new dumps I will get on readding this*/}
            </div>
        </div>
    );
}
