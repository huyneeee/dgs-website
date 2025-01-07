import SectionContent from '@/components/layout/SectionContent';
import { academicsAPI } from '@/services/academics';
import { useLocale } from 'next-intl';
import { use } from 'react';

const HighSchool = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getHighSchoolPage(locale));

  return <SectionContent content={data.data} />;
};

export default HighSchool;
