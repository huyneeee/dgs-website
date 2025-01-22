import SectionContent from '@/components/layout/SectionContent';
import { resources } from '@/services/resources';
import { useLocale } from 'next-intl';
import { use } from 'react';

const DgsLibrary = () => {
  const locale = useLocale();
  const admissionData = use(resources.getLibrary(locale));

  return <SectionContent content={admissionData.data} />;
};

export default DgsLibrary;
