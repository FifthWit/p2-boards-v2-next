import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { p2map, p2mapdata } from "./p2data";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function rankToPoints(rank: number): number {
  const base = 200 - (rank - 1);
  return Math.max(1, (base * base) / 200);
}

export function scoreToTime(score: number): string {
  const scoreStr = score.toString().padStart(4, '0');
  const decimalPart = scoreStr.slice(-2);
  const minutesSecondsPart = scoreStr.slice(0, -2);

  if (minutesSecondsPart.length > 2) {
      const minutes = parseInt(minutesSecondsPart.slice(0, -2));
      const seconds = minutesSecondsPart.slice(-2);
      return `${minutes}:${seconds}.${decimalPart}`;
  } else if (minutesSecondsPart.length === 2) {
      return `${parseInt(minutesSecondsPart)}.${decimalPart}`;
  } else {
      return `0.${decimalPart}`;
  }
}

export function idToLevel(id: number): p2map | null{
  let level: p2map | null = null;

  for (let i = 0; i < p2mapdata.length; i++){
    if (p2mapdata[i].BoardID == id) {
      level = p2mapdata[i];
      break;
    }
  }

  return level;
}