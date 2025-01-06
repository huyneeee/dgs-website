'use client';
import { MainNav } from '@/configs/tabs';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import React from 'react';

type TabContentProps = {
  data: {
    title: string;
    link: string;
  }[];

  translationKey: MainNav;
};

export const TabContent = ({ data, translationKey }: TabContentProps) => {
  const pathname = usePathname();
  const t = useTranslations(`Navigation.${translationKey}`);

  return (
    <section
      id="tab-content-about"
      className="flex items-center w-full justify-between max-sm:overflow-x-auto gap-8 lg:w-fit lg:justify-start lg:gap-16 lg:my-3"
    >
      {data.map((item, key) => (
        <Link
          id={item.link.replaceAll('/', '-')}
          href={item.link}
          key={key}
          className={cn(
            'text-xs sm:text-base text-jungle uppercase underline-offset-[8px] hover:underline decoration-4 max-lg:min-w-max',
            pathname.includes(item.link) && 'underline font-bold',
          )}
        >
          {t(item.title as any)}
        </Link>
      ))}
    </section>
  );
};
