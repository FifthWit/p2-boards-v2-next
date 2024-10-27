"use client"
import Link from 'next/link';
import React from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Card } from '@/components/ui/card';
import { p2mapdata } from '@/lib/p2data';

export default function MapSearch() {

  return (
    <Card>
        <Command>
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Links">
                <CommandItem><Link href={"https://autorender.p2sr.org"}>Autorender</Link></CommandItem>
                <CommandItem><Link href={"https://discord.gg/p2sr"}>Portal 2 Speedrunning Discord</Link></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Maps">
              {p2mapdata.map((map, index) => (
                <Link href={`/maps/${map.BoardID}`} key={index}>
                    <CommandItem key={index}>
                  {map.Name} <CommandShortcut key={index}>({map.BSP})</CommandShortcut>
                    </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
    </Card>
  );
}