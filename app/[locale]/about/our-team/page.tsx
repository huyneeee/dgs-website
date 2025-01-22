import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { about } from '@/services/about';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const data = await about.getOurTeam(locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/About/OurTeam/OutTeamPage';
