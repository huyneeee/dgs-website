import { jobAPI } from '@/services/jobs';
import JobDescription from './JobDescription';
import FormApply from './FormApply/FormApply';

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const job = await jobAPI.getDetailJob(locale, id);

  return (
    <main className="container py-10 flex max-lg:flex-col">
      <JobDescription {...job.data} />
      <FormApply />
    </main>
  );
}
