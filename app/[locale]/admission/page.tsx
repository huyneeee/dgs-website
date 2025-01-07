import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { admission } from '@/services/admission';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const data = await admission.getAdmission(params.locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/Admission/Admission';
