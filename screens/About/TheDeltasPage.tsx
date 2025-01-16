// import { useTranslations } from 'next-intl';
import SectionContent from '@/components/layout/SectionContent';
import { about } from '@/services/about';
import { useLocale } from 'next-intl';
import { use } from 'react';

const TheDeltasPage = () => {
  const locale = useLocale();
  const deltasPageData = use(about.getDeltasPage(locale));

  console.log('deltasPageData', deltasPageData);

  return <SectionContent content={deltasPageData.data} />;
};

export default TheDeltasPage;
