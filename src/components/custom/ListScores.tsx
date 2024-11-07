/* eslint-disable @typescript-eslint/no-explicit-any */
// ikik I WILL get around to removing the any I am just lazy
'use client';
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Score from './Score';
import anime from 'animejs';

function ListScores({
    scores,
    hideLink,
    hideMap,
}: {
    scores: any[];
    hideLink?: boolean;
    hideMap?: boolean;
}) {
    useEffect(() => {
        anime({
            targets: '.score',
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 800,
            delay: anime.stagger(50),
        });
    }, []);

    const scoresPerTab = 40;
    const totalTabs = Math.ceil(scores.length / scoresPerTab);
    const tabs = Array.from({ length: totalTabs }, (_, i) =>
        scores.slice(i * scoresPerTab, (i + 1) * scoresPerTab)
    );

    const [currentTab, setCurrentTab] = useState('tab-1');
    const [inputPage, setInputPage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPage(e.target.value);
    };

    const goToPage = () => {
        const pageNumber = parseInt(inputPage, 10);
        if (pageNumber >= 1 && pageNumber <= totalTabs) {
            setCurrentTab(`tab-${pageNumber}`);
        }
    };

    const maxVisibleTabs = 5;
    const half = Math.floor(maxVisibleTabs / 2);
    let start = 0;
    let end = totalTabs;

    const currentPage = parseInt(currentTab.split('-')[1], 10);

    if (totalTabs > maxVisibleTabs) {
        if (currentPage <= half) {
            start = 0;
            end = maxVisibleTabs;
        } else if (currentPage > totalTabs - half) {
            start = totalTabs - maxVisibleTabs;
            end = totalTabs;
        } else {
            start = currentPage - half - 1;
            end = currentPage + half;
        }
    }

    const visibleTabs = tabs.slice(start, end);

    return (
        <div className="w-full flex flex-col items-center">
            <Tabs
                value={currentTab}
                onValueChange={setCurrentTab}
                className="w-full flex flex-col items-center"
            >
                <div className="w-full flex justify-center items-center gap-4 m-4">
                    <TabsList className="justify-center">
                        {visibleTabs.map((_, index) => {
                            const tabIndex = start + index + 1;
                            return (
                                <TabsTrigger
                                    key={tabIndex}
                                    value={`tab-${tabIndex}`}
                                >
                                    Page {tabIndex}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    <div className="flex items-center gap-2">
                        <Input
                            className="w-20"
                            type="number"
                            value={inputPage}
                            onChange={handleInputChange}
                            placeholder="Page #"
                            min={1}
                            max={totalTabs}
                        />
                        <Button onClick={goToPage} size="sm">
                            Go
                        </Button>
                    </div>
                </div>

                {tabs.map((pageScores, index) => (
                    <TabsContent
                        key={index}
                        value={`tab-${index + 1}`}
                        className="w-full flex justify-center"
                    >
                        <div className="w-full flex flex-col items-center">
                            {pageScores.map((run: any, idx: number) => (
                                <Score
                                    hideLink={hideLink}
                                    hideMap={hideMap}
                                    key={idx}
                                    {...run}
                                    className="score w-full"
                                />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

export default ListScores;
