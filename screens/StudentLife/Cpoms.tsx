import SectionContent from '@/components/layout/SectionContent';
import { studentLife } from '@/services/studentLife';
import { useLocale } from 'next-intl';
import { use } from 'react';

const Cpoms = () => {
  const locale = useLocale();
  const cpomsData = use(studentLife.getCpoms(locale));

  return <SectionContent content={cpomsData.data} />;
};

export default Cpoms;
