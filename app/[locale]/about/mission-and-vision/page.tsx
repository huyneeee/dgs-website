import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { about } from '@/services/about';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const data = await about.getMissionAndVision(params.locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/About/MissionAndVisionPage';
