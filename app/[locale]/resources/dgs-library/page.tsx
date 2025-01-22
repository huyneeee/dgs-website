import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { resources } from '@/services/resources';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const data = await resources.getLibrary(params.locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/Resources/DgsLibrary';
