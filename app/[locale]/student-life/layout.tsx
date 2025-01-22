import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function StudentLifeLayout({ children }: PropsWithChildren) {
  const t = useTranslations();
  return (
    <section className="container">
      <h3 className="heading-2">{t('StudentLife.title')}</h3>
      <TabContent data={tabs['student-life']!} translationKey="student-life" />
      {children}
    </section>
  );
}
