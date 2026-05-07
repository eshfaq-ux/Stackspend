import type { AuditResult } from '@/lib/audit/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ResultCardProps {
  result: AuditResult
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Spend Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 text-sm">
        <p>Monthly: <span className="font-semibold">${result.totalMonthly.toFixed(2)}</span></p>
        <p>Annual: <span className="font-semibold">${result.totalAnnual.toFixed(2)}</span></p>
        <p>Potential savings: <span className="font-semibold text-green-600">${result.potentialSavings.toFixed(2)}</span></p>
      </CardContent>
    </Card>
  )
}
