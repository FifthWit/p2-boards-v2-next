"use client"
import { useEffect } from "react";
import anime from 'animejs'
import Score from '@/components/custom/Score';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ListScores({ scores }: any) {
    useEffect(() => {
        anime({
          targets: '.score',
          translateY: [-50, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 800,
          delay: anime.stagger(50),
        });
      }, []);
    
      return (
        <div>
        {scores.map((run: any) => (
          <Score
            key={run.id}
            id={run.id}
            level={run.level}
            scoreDataId={run.scoreDataId}
            userDataId={run.userDataId}
            scoreData={run.scoreData}
            userData={run.userData}
          />
        ))}
        </div>
      );
}
/* eslint-enable @typescript-eslint/no-explicit-any */