"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

interface ScoreData {
    day: string
    Submission: number
}

interface ChangeProps {
  chartData: ScoreData[]
  className?: string
}

const chartConfig = {
  Submission: {
    label: "Submission",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Change({ chartData, className }: ChangeProps) {
  return (
    <Card className={cn("min-h-[450px] w-full", className)}>
      <CardHeader>
        <CardTitle>Recent Runs</CardTitle>
        <CardDescription>Runs in the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Submission" fill="var(--color-Submission)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
