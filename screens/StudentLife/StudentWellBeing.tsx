import SectionContent from '@/components/layout/SectionContent';
import { studentLife } from '@/services/studentLife';
import { useLocale } from 'next-intl';
import { use } from 'react';

const StudentWellBeing = () => {
  const locale = useLocale();
  const studentWellBeingData = use(studentLife.getStudentWellBeing(locale));

  return <SectionContent content={studentWellBeingData.data} />;
};

export default StudentWellBeing;
