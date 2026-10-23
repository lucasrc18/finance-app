import { AppSidebar } from "@/components/layout/AppSidebar"
import { BalanceChart } from "@/components/overview/BalanceChart"
import { MetricCards } from "@/components/overview/MetricCards"

function App() {
  return (
    <div className="flex min-h-svh bg-background">
      <AppSidebar />
      <main className="flex min-w-0 flex-1 flex-col gap-6 overflow-auto p-6 md:p-8">
        <header>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Overview
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Resumo do patrimônio com valores simulados.
          </p>
        </header>
        <MetricCards />
        <BalanceChart />
      </main>
    </div>
  )
}

export default App
