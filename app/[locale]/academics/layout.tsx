import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import AcademicsStatement from '@/screens/Academics/AcademicsStatement';
import AcademicsStories from '@/screens/Academics/AcademicsStories.tsx';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function AcademicsLayout({ children }: PropsWithChildren) {
  const t = useTranslations();

  return (
    <main className="bg-[#fafafa] flex flex-col w-full xl:pb-40 pb-20">
      <div className="container">
        <h3 className="heading-2 my-3 lg:my-5">{t('Academics.title')}</h3>
        <TabContent data={tabs.academics!} translationKey="academics" />
        {children}
      </div>
      <AcademicsStatement />
      <div className="container">
        <AcademicsStories />
      </div>
    </main>
  );
}
