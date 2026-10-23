import { LayoutDashboard, Lightbulb, Target, TrendingUp } from "lucide-react"
import { cn } from "cn"

const navItems = [
  { label: "Overview", icon: LayoutDashboard, current: true },
  { label: "Insights", icon: Lightbulb, current: false },
  { label: "Goals", icon: Target, current: false },
  { label: "Investments", icon: TrendingUp, current: false },
] as const

export function AppSidebar() {
  return (
    <aside className="flex h-svh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="border-b border-sidebar-border px-5 py-6">
        <p className="font-heading text-lg font-semibold tracking-tight">
          Finance-App
        </p>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <span
              key={item.label}
              className={cn(
                "flex cursor-default items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium",
                item.current
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </span>
          )
        })}
      </nav>
    </aside>
  )
}
