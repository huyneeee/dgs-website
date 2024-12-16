'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { paths } from '@/app/router';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';

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

export const TabContent = () => {
  const pathname = usePathname();
  const t = useTranslations('Navigation.about');

  useEffect(() => {
    const element = document.querySelector(`#${pathname.replaceAll('/', '-')}`);
    if (!element) return;
    element.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  }, []);

  return (
    <section
      id='tab-content-about'
      className='flex items-center w-full justify-between max-sm:overflow-x-auto gap-8 lg:w-fit lg:justify-start lg:gap-16 lg:my-3'
    >
      {Data.map((item, key) => (
        <Link
          id={item.link.replaceAll('/', '-')}
          href={item.link}
          key={key}
          className={cn(
            'text-xs sm:text-base text-jungle uppercase underline-offset-[8px] hover:underline decoration-4 max-lg:min-w-max',
            pathname.includes(item.link) && 'underline font-bold'
          )}
        >
          {t(item.title as any)}
        </Link>
      ))}
    </section>
  );
};
