import SectionContent from '@/components/layout/SectionContent';
import { studentLife } from '@/services/studentLife';
import { useLocale } from 'next-intl';
import { use } from 'react';

const LeadershipOpportunities = () => {
  const locale = useLocale();
  const leaderShipData = use(studentLife.getLeadershipOpportunity(locale));

  return <SectionContent content={leaderShipData.data} />;
};

export default LeadershipOpportunities;
