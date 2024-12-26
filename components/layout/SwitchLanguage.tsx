'use client';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { USFlag, VNFlag } from '@/public/icons/Flags';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SwitchLanguage = ({ className = '' }) => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const search = useSearchParams();

  const onSelectChange = (locale: Locale) => {
    const query: Record<string, string> = {};
    for (const [key, value] of search.entries()) {
      query[key] = value;
    }

    router.replace({ pathname, query }, { locale });
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex items-center gap-3 bg-green-500 p-2 rounded-md">
        <button
          onClick={() => onSelectChange('en')}
          className={cn(
            'size-[32px] rounded-full box-content cursor-pointer border-[2px]',
            locale === 'en' ? 'grayscale-0 border-yellow-300' : 'grayscale',
          )}
        >
          <USFlag />
        </button>
        <button
          onClick={() => onSelectChange('vi')}
          className={cn(
            'size-[32px] rounded-full box-content cursor-pointer border-[2px]',
            locale === 'vi' ? 'grayscale-0 border-yellow-300' : 'grayscale',
          )}
        >
          <VNFlag />
        </button>
      </div>
    </div>
  );
};

export default SwitchLanguage;
