import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { academicsAPI } from '@/services/academics';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const data = await academicsAPI.getCollegeCounselingPage(params.locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/Academics/CollegeCounseling';
