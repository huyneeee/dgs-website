import SectionContent from '@/components/layout/SectionContent';
import { coCurruculars } from '@/services/coCurriculars';
import { useLocale } from 'next-intl';
import { use } from 'react';

const ClubAndActivities = () => {
  const locale = useLocale();
  const clubAndActivity = use(coCurruculars.getActivitiesPage(locale));

  return <SectionContent content={clubAndActivity.data} />;
};

export default ClubAndActivities;
