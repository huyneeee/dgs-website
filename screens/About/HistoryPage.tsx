// import { useTranslations } from 'next-intl';

import SectionContent from '@/components/layout/SectionContent';
import { about } from '@/services/about';
import { useLocale } from 'next-intl';
import { use } from 'react';

const History = () => {
  const locale = useLocale();
  const gdsHistoryPageData = use(about.getDgsHistory(locale));

  return <SectionContent content={gdsHistoryPageData.data} />;
};

export default History;
