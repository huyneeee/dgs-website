import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function CoCurricularsLayout({ children }: PropsWithChildren) {
  const t = useTranslations();
  return (
    <section className="container">
      <h3 className="heading-2">{t('CoCurriculars.title')}</h3>
      <TabContent
        data={tabs['co-curriculars']!}
        translationKey="co-curriculars"
      />
      {children}
    </section>
  );
}
