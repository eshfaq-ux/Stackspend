import type { Recommendation } from '@/lib/audit/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface RecommendationCardProps {
  recommendation: Recommendation
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{recommendation.title}</CardTitle>
        <Badge variant="secondary">${recommendation.estimatedSavings}/mo</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{recommendation.description}</p>
      </CardContent>
    </Card>
  )
}
