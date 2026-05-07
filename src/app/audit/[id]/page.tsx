import { PageHeader } from '@/components/shared/page-header'

interface AuditDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function AuditDetailPage({ params }: AuditDetailPageProps) {
  const { id } = await params
  return <PageHeader title={`Audit #${id}`} />
}
