/* eslint-disable @typescript-eslint/no-explicit-any */
import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React from 'react';

const Data = [
  {
    title: 'deltas',
    link: paths.about.deltas,
  },
  {
    title: 'mission-and-vision',
    link: paths.about['mission-and-vision'],
  },
  {
    title: 'history',
    link: paths.about.history,
  },
  {
    title: 'our-team',
    link: paths.about['our-team'],
  },
] as const;

export const TabContent = ({
  tabActive,
}: {
  tabActive?: (typeof Data)[number]['title'];
}) => {
  const t = useTranslations('Navigation.about');
  return (
    <section id='tab-content-about' className='flex items-center w-full justify-between lg:w-fit lg:justify-start lg:gap-16 lg:my-3'>
      {Data.map((item, key) => (
        <Link
          href={item.link}
          key={key}
          className={cn(
            'text-xs sm:text-base text-jungle uppercase underline-offset-[8px] hover:underline decoration-4',
            tabActive === item.title && 'underline font-bold'
          )}
        >
          {t(item.title as any)}
        </Link>
      ))}
    </section>
  );
};
