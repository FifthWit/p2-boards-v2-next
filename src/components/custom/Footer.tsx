"use client"
import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Link {
    href: string
    title: string
  }
  
const links: Link[] = [
    {
      href: "https://autorender.p2sr.org",
      title: "Autorender",
    },
    {
        href: "https://github.com/p2sr",
        title: "GitHub",
    },
    {
        href: "https://autorender.p2sr.org",
        title: "Autorender",
    },
    {
        href: "https://autorender.p2sr.org",
        title: "Autorender",
    },
]

export default function Footer(){
    return (
        <div className="w-full border border-t h-16 flex flex-row items-center justify-center">
            <div className="h-full w-min flex flex-row items-center justify-between">
            {links.map((link, index) => (
              <React.Fragment key={index}>
              <Button asChild className="text-muted-foreground" variant="ghost">
                <Link href={link.href} className="flex items-center space-x-2">
                <span>{link.title}</span>
                </Link>
              </Button>
              {index !== links.length - 1 ? (<span className="text-muted-foreground">|</span>) : null}
              </React.Fragment>
            ))}
            </div>
        </div>
    )
}