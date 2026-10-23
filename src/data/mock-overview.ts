export const overviewMetrics = {
  total: 127_450.32,
  amountInvested: 98_000,
  overallReturn: 29_450.32,
}

export const balanceOverTime = [
  { month: "Jan", total: 82_400 },
  { month: "Feb", total: 86_150 },
  { month: "Mar", total: 91_280 },
  { month: "Apr", total: 89_940 },
  { month: "May", total: 97_610 },
  { month: "Jun", total: 104_220 },
  { month: "Jul", total: 108_750 },
  { month: "Aug", total: 114_390 },
  { month: "Sep", total: 121_080 },
  { month: "Oct", total: 127_450.32 },
]

export const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})
