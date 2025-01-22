import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { studentLife } from '@/services/studentLife';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const data = await studentLife.getLeadershipOpportunity(locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/StudentLife/StudentLeadership';
