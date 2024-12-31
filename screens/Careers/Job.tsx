import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import { ArrowUpRight, Clock, Hotel, MapPinned } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { PropsWithChildren } from 'react';

const Chip = ({ children }: PropsWithChildren) => {
  return (
    <div className="rounded-3xl text-xs px-4 py-1 font-medium border border-gray-600 flex items-center gap-0.5">
      {children}
    </div>
  );
};

const Job = ({
  jobName,
  shortJobDescription,
  workType,
  location,
  locationType,
  documentId,
}: Job) => {
  const t = useTranslations('Careers');
  return (
    <div className="py-5 flex justify-between max-sm:flex-col max-sm:gap-3 border-b border-gray-900">
      <div className="flex flex-col flex-auto">
        <h4 className="heading-4">{jobName}</h4>
        <p className="mt-2 mb-5 max-sm:mt-0">{shortJobDescription}</p>
        <div className="flex items-center gap-1 sm:gap-3 flex-wrap">
          {workType && (
            <Chip>
              <Clock size={14} /> {workType}
            </Chip>
          )}

          {location && (
            <Chip>
              <MapPinned size={14} />
              {location}
            </Chip>
          )}

          {locationType && (
            <Chip>
              <Hotel size={14} />
              {locationType}
            </Chip>
          )}
        </div>
      </div>
      <div className="w-fit sm:w-[125px] shrink-0">
        <Link
          href={`${paths.careers.root}/${documentId}`}
          className="flex items-center sm:justify-end gap-0.5 font-semibold underline-offset-1 hover:underline max-sm:w-full max-sm:bg-foreground max-sm:text-background max-sm:rounded-full max-sm:py-1.5 max-sm:px-5 max-sm:justify-center max-sm:hover:no-underline max-sm:text-sm"
        >
          {t('apply')}
          <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default Job;
