export type ToolCategory =
  | 'communication'
  | 'design'
  | 'development'
  | 'analytics'
  | 'marketing'
  | 'productivity'
  | 'infrastructure'
  | 'other'

export type BillingCycle = 'monthly' | 'annual'

export interface Tool {
  id: string
  name: string
  category: ToolCategory
  pricePerSeat: number
  seats: number
  billingCycle: BillingCycle
  plan: string
}

export interface AuditInput {
  tools: Tool[]
  teamSize: number
}

export interface Recommendation {
  type: 'downgrade' | 'duplicate' | 'credits' | 'alternative'
  toolId: string
  title: string
  description: string
  estimatedSavings: number
}

export interface AuditResult {
  totalMonthly: number
  totalAnnual: number
  potentialSavings: number
  recommendations: Recommendation[]
}
