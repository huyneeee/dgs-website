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
      className="flex items-center w-full justify-between overflow-x-auto scroll-smooth gap-4 lg:justify-start lg:gap-8 scrollbar-thin border-b-[1px] border-[#e5e7eb] mb-4"
    >
      {data.map((item, key) => (
        <Link
          id={item.link.replaceAll('/', '-')}
          href={item.link}
          key={key}
          className={cn(
            'inline-block text-xs sm:text-base font-[600] uppercase min-w-max line-clamp-1 py-2',
            pathname.includes(item.link) &&
              'border-b-[2px] border-jungle text-jungle',
          )}
        >
          {t(item.title as any)}
        </Link>
      ))}
    </section>
  );
};
