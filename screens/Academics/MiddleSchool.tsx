import SectionContent from '@/components/layout/SectionContent';
import { academicsAPI } from '@/services/academics';
import { useLocale } from 'next-intl';
import { use } from 'react';

const MiddleSchool = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getMiddleSchoolPage(locale));

  return <SectionContent content={data.data} />;
};

export default MiddleSchool;
