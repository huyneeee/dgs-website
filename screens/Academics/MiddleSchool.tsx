import SectionContent from '@/components/layout/SectionContent';
import { academicsAPI } from '@/services/academics';
import { useLocale } from 'next-intl';
import { use } from 'react';

const MiddleSchool = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getAcademics(locale));
  const content = data.data.find(item => item.type === 'middle-school');

  if (!content) return null;
  return <SectionContent content={content} />;
};

export default MiddleSchool;
