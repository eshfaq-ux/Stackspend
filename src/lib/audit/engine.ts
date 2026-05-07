import type { AuditInput, AuditResult } from './types'
import { monthlyTotal, annualTotal } from './calculators'
import { planDowngradeRule } from './rules/planDowngrade'
import { duplicateToolsRule } from './rules/duplicateTools'
import { creditsOptimizationRule } from './rules/creditsOptimization'
import { alternativeRecommendationsRule } from './rules/alternativeRecommendations'

export function runAudit(input: AuditInput): AuditResult {
  const { tools } = input

  const recommendations = [
    ...planDowngradeRule(tools),
    ...duplicateToolsRule(tools),
    ...creditsOptimizationRule(tools),
    ...alternativeRecommendationsRule(tools),
  ]

  return {
    totalMonthly: monthlyTotal(tools),
    totalAnnual: annualTotal(tools),
    potentialSavings: recommendations.reduce((s, r) => s + r.estimatedSavings, 0),
    recommendations,
  }
}
