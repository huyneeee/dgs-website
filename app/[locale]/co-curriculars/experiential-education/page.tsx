import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { coCurruculars } from '@/services/coCurriculars';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const data = await coCurruculars.getExpEducationPage(locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/CoCurriculars/ExperientialEducation';
