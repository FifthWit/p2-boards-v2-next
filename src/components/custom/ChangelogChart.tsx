"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import useResize from "@/lib/useResize"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
}

const chartConfig = {
  Submission: {
    label: "Submission",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function Change({ chartData }: ChangeProps) {
  const dimensions = useResize();
  return (
    <Card className="min-h-[450px]">
      <CardHeader>
        <CardTitle>Recent Runs</CardTitle>
        <CardDescription>Runs in the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] max-h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData} width={dimensions.width} height={400} >
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
