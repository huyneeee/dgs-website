import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { coCurruculars } from '@/services/coCurriculars';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const data = await coCurruculars.getActivitiesPage(params.locale);
  return generateMetadataFromData(data.data.seo);
}
export { default } from '@/screens/CoCurriculars/ClubAndActivities';
