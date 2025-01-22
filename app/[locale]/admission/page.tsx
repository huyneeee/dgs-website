import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { admission } from '@/services/admission';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const data = await admission.getAdmission(locale);
  return generateMetadataFromData(data.data.seo);
}

export { default } from '@/screens/Admission/Admission';
