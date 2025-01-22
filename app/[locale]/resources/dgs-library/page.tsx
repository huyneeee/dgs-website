import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { resources } from '@/services/resources';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const data = await resources.getLibrary(locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/Resources/DgsLibrary';
