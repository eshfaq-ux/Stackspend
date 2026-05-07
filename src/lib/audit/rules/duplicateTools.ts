import type { Tool, Recommendation } from '../types'

/** Flag multiple tools in the same category doing the same job */
export function duplicateToolsRule(tools: Tool[]): Recommendation[] {
  const byCategory = tools.reduce<Record<string, Tool[]>>((acc, t) => {
    acc[t.category] = [...(acc[t.category] ?? []), t]
    return acc
  }, {})

  return Object.values(byCategory)
    .filter((group) => group.length > 1)
    .flatMap((group) =>
      group.slice(1).map((t) => ({
        type: 'duplicate' as const,
        toolId: t.id,
        title: `Duplicate ${t.category} tool`,
        description: `You have multiple ${t.category} tools. Consider consolidating.`,
        estimatedSavings: t.pricePerSeat * t.seats,
      }))
    )
}
