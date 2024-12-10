'use client';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { USFlag, VNFlag } from '@/public/icons/Flags';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SwitchLanguage = ({ className = '' }) => {
  const t = useTranslations();
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
      <p className='text-sm'>{t('language')}: </p>
      <div className='flex items-center gap-2'>
        <div
          onClick={() => onSelectChange('en')}
          className={cn(
            'w-5 h-5 rounded-full box-content cursor-pointer',
            locale === 'en' ? 'grayscale-0 border border-bamboo' : 'grayscale'
          )}
        >
          <USFlag />
        </div>
        <div
          onClick={() => onSelectChange('vi')}
          className={cn(
            'w-5 h-5 rounded-full box-content cursor-pointer',
            locale === 'vi' ? 'grayscale-0 border border-bamboo' : 'grayscale'
          )}
        >
          <VNFlag />
        </div>
      </div>
    </div>
  );
};

export default SwitchLanguage;
