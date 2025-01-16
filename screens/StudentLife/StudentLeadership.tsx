import SectionContent from '@/components/layout/SectionContent';
import { studentLife } from '@/services/studentLife';
import { useLocale } from 'next-intl';
import { use } from 'react';

const StudentLeadership = () => {
  const locale = useLocale();
  const leaderShipData = use(studentLife.getLeadershipOpportunity(locale));

  console.log('leaderShipData', leaderShipData);

  return <SectionContent content={leaderShipData.data} />;
};

export default StudentLeadership;
