// import { useTranslations } from 'next-intl';
import SectionContent from '@/components/layout/SectionContent';
import { about } from '@/services/about';
import { useLocale } from 'next-intl';
import { use } from 'react';

const MissionAndVisionPage = () => {
  const locale = useLocale();
  const missionAndVisionData = use(about.getMissionAndVision(locale));

  return <SectionContent content={missionAndVisionData.data} />;
};

export default MissionAndVisionPage;
