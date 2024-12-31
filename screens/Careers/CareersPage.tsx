import { Link } from '@/i18n/routing';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Job from './Job';
import { jobAPI } from '@/services/jobs';
import { use } from 'react';

const websites = [
  {
    label: 'Linkedin',
    value: 'https://www.linkedin.com',
  },
  {
    label: 'Vietnamworks',
    value: 'https://www.vietnamworks.com',
  },
  {
    label: 'Topcv',
    value: 'https://www.topcv.vn',
  },
];

const CareersPage = () => {
  const t = useTranslations('Careers');
  const locale = useLocale();

  const jobs = use(jobAPI.getAllJobs(locale));

  const middleSchoolJobs = jobs.data.filter(
    job => job.block === 'Middle School',
  );
  const highSchoolJobs = jobs.data.filter(job => job.block === 'High School');
  const administrationJobs = jobs.data.filter(
    job => job.block === 'All School Administration',
  );

  return (
    <main className="container py-10 flex flex-col gap-8 sm:gap-14">
      <section id="apply-through-other-websites">
        <h1 className="heading-1 my-5">{t('applyThroughOtherWebsites')}</h1>
        <div className="flex flex-wrap gap-3 sm:gap-10 mt-5">
          {websites.map((item, key) => (
            <Link
              key={key}
              href={item.value}
              target="_blank"
              className="flex items-center gap-1 underline-offset-2 hover:underline font-normal"
            >
              {item.label} <SquareArrowOutUpRight />
            </Link>
          ))}
        </div>
      </section>

      {!!middleSchoolJobs.length && (
        <section id="middle-school">
          <h1 className="heading-1 my-5">{t('middleSchool')}</h1>
          <div className="flex flex-col">
            {middleSchoolJobs.map(job => (
              <Job key={job.documentId} {...job} />
            ))}
          </div>
        </section>
      )}

      {!!highSchoolJobs.length && (
        <section id="high-school">
          <h1 className="heading-1 my-5">{t('highSchool')}</h1>
          <div className="flex flex-col">
            {highSchoolJobs.map(job => (
              <Job key={job.documentId} {...job} />
            ))}
          </div>
        </section>
      )}

      {!!administrationJobs.length && (
        <section id="all-administration">
          <h1 className="heading-1 my-5">{t('allSchoolAdministration')}</h1>
          <div className="flex flex-col">
            {administrationJobs.map(job => (
              <Job key={job.documentId} {...job} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default CareersPage;
