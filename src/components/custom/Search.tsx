"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Card } from '@/components/ui/card';
import { p2map, p2mapdata } from '@/lib/p2data';
import { MonitorPlay } from 'lucide-react';

export default function MapSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const filterMaps = (searchTerm: string) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return p2mapdata.filter(map =>
      map.BSP.toLowerCase().includes(lowerSearchTerm) ||
      map.Name.toLowerCase().includes(lowerSearchTerm)
    ).slice(0, 15);
  };

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