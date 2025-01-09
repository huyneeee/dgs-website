import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import { useTranslations } from 'next-intl';
import { PropsWithChildren } from 'react';

export default function ResourceLayout({ children }: PropsWithChildren) {
  const t = useTranslations();

  return (
    <section className="container">
      <h3 className="heading-2">{t('Resources.title')}</h3>
      <TabContent data={tabs.resources!} translationKey="resources" />
      {children}
    </section>
  );
}
