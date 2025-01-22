import SectionContent from '@/components/layout/SectionContent';
import OurTeam from '@/screens/About/OurTeam/OurTeam';
import { academicsAPI } from '@/services/academics';
import { teamMemberAPI } from '@/services/teamMembers';
import { useLocale } from 'next-intl';
import { use } from 'react';

const CollegeCounseling = () => {
  const locale = useLocale();
  const team = use(teamMemberAPI.getTeamMembers(locale));
  const collegeCounseling = use(academicsAPI.getCollegeCounselingPage(locale));

  console.log('d', collegeCounseling.data);

  return (
    <div>
      <OurTeam teamMembers={team.data} page="college-counseling" />

      <div className="mt-4">
        <h3 className="text-[22px] font-[600] md:text-[48px] text-center">
          Here is How You Get Into College
        </h3>

        <SectionContent content={collegeCounseling.data} />
      </div>
    </div>
  );
};

export default CollegeCounseling;
