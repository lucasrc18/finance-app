import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { currencyFormatter, overviewMetrics } from "@/data/mock-overview"

const cards = [
  { title: "Total:", value: overviewMetrics.total },
  { title: "Amout Invested", value: overviewMetrics.amountInvested },
  { title: "overrall return", value: overviewMetrics.overallReturn },
] as const

export function MetricCards() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <Card key={card.title} className="overflow-visible">
          <CardHeader>
            <CardTitle className="text-muted-foreground">{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-heading text-xl font-semibold tracking-tight tabular-nums sm:text-2xl">
              {currencyFormatter.format(card.value)}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
