import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import AcademicsStatement from '@/screens/Academics/AcademicsStatement';
import AcademicsStories from '@/screens/Academics/AcademicsStories.tsx';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function AcademicsLayout({ children }: PropsWithChildren) {
  const t = useTranslations();

  return (
    <>
      <section className="container">
        <h3 className="heading-2">{t('Academics.title')}</h3>
        <TabContent data={tabs.academics!} translationKey="academics" />
        {children}
      </section>
      <AcademicsStatement />
      <section className="container">
        <AcademicsStories />
      </section>
    </>
  );
}
