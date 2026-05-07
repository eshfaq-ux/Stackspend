import { PageHeader } from '@/components/shared/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Monitor and manage your software stack spending."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
            <Badge variant="secondary">Active</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0.00</p>
            <p className="text-muted-foreground text-xs">No subscriptions yet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Annual Spend</CardTitle>
            <Badge variant="secondary">Active</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$0.00</p>
            <p className="text-muted-foreground text-xs">Projected from monthly</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tools Tracked</CardTitle>
            <Badge variant="outline">0</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">0</p>
            <p className="text-muted-foreground text-xs">Add your first tool</p>
          </CardContent>
        </Card>
      </div>

      <Button>Add Subscription</Button>
    </div>
  )
}
