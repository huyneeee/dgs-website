import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function AcademicsLayout({ children }: PropsWithChildren) {
  const t = useTranslations();
  return (
    <main className="bg-[#fafafa] flex flex-col w-full container xl:pb-40 pb-20">
      <h3 className="heading-2 my-3 lg:my-5">{t('Academics.title')}</h3>
      <TabContent data={tabs.academics!} translationKey="academics" />
      {children}
    </main>
  );
}
