import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { studentLife } from '@/services/studentLife';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const data = await studentLife.getLeadershipOpportunity(params.locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/StudentLife/StudentLeadership';
