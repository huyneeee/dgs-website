import { jobAPI } from '@/services/jobs';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams({ params }: Props) {
  const { locale } = await params;
  const jobs = await jobAPI.getAllJobs(locale);

  return jobs.data.map(job => ({
    id: job.documentId,
  }));
}

export { default } from '@/screens/Careers/JobDetailPage';
