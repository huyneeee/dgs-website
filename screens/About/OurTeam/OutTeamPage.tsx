import React, { use } from 'react';
import OurTeam from './OurTeam';
import { useLocale } from 'next-intl';
import { teamMemberAPI } from '@/services/teamMembers';

const OutTeamPage = () => {
  const locale = useLocale();
  const res = use(teamMemberAPI.getTeamMembers(locale));
  return <OurTeam teamMembers={res.data} />;
};

export default OutTeamPage;
