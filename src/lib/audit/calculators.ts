import type { Tool } from './types'

export function monthlyTotal(tools: Tool[]): number {
  return tools.reduce((sum, t) => {
    const monthly = t.billingCycle === 'annual' ? (t.pricePerSeat * t.seats * 12) / 12 : t.pricePerSeat * t.seats
    return sum + monthly
  }, 0)
}

export function annualTotal(tools: Tool[]): number {
  return monthlyTotal(tools) * 12
}
