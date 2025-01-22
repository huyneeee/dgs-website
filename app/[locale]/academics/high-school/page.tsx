import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { academicsAPI } from '@/services/academics';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const data = await academicsAPI.getHighSchoolPage(locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/Academics/HighSchool';
