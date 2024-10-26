"use client"
import Link from "next/link"
import { MonitorPlay } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-switcher"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search as SearchIcon } from "lucide-react"
import Search from '@/components/custom/Search'

interface Link {
  href: string
  title: string
  icon: React.ReactNode
}

const links: Link[] = [
  {
    href: "https://autorender.p2sr.org",
    title: "Autorender",
    icon: <MonitorPlay />
  }
]

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex flex-row p-4 border-b items-center bg-background z-50">
      <h3 className="mr-4 font-bold underline-offset-4 underline"><Link href="/">Portal 2 Leaderboards</Link></h3>
      {links.map((link) => (
        <Button asChild key={link.href} className="mx-2">
          <Link href={link.href} className="flex items-center space-x-2">
            {link.icon}
            <span>{link.title}</span>
          </Link>
        </Button>
      ))}
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="mx-2">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Search />
        </PopoverContent>
      </Popover>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </div>
  )
}