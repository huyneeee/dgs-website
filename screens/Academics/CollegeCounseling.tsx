import OurTeam from '@/screens/About/OurTeam/OurTeam';
import { academicsAPI } from '@/services/academics';
import { teamMemberAPI } from '@/services/teamMembers';
import { useLocale } from 'next-intl';
import { use } from 'react';

const CollegeCounseling = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getAcademics(locale));
  const team = use(teamMemberAPI.getTeamMembers(locale));

  return (
    <div>
      <OurTeam teamMembers={team.data} page="college-counseling" />

      <div className="mt-4">
        <h3 className="text-[22px] font-[600] md:text-[48px] text-center">
          Here is How You Get Into College
        </h3>
        <div className="w-full md:w-[80%] mx-auto">
          <div className="flex flex-col gap-4 md:gap-8 py-8">
            <div className="w-full md:w-1/2 bg-slate-100 rounded-sm p-8 ">
              <h4 className="text-[24px] md:text-[40px] text-jungle">
                Step 1: Research
              </h4>
              <p className="text-[16px] md:text-[20px]">
                Research the colleges you are interested in. Look at their
                programs, location, size, and cost. Make sure you meet their
                admission requirements.
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-slate-200 rounded-sm p-8 mx-auto">
              <h4 className="text-[24px] md:text-[40px] text-jungle">
                Step 2: Prepare
              </h4>
              <p className="text-[16px] md:text-[20px]">
                Prepare for the SAT or ACT. Take practice tests and study. You
                should also prepare your college application.
              </p>
            </div>

            <div className="w-full md:w-1/2 bg-slate-300 rounded-sm p-8 ml-auto">
              <h4 className="text-[24px] md:text-[40px] text-jungle">
                Step 3: Apply
              </h4>
              <p className="text-[16px] md:text-[20px]">
                Apply to the colleges you are interested in. Make sure you meet
                their application deadlines. You should also apply for financial
                aid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCounseling;
