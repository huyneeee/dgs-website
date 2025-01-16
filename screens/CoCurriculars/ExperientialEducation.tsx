import SectionContent from '@/components/layout/SectionContent';
import { cn } from '@/lib/utils';
import { handleMedia } from '@/screens/News/NewsDetailPage';
import { coCurruculars } from '@/services/coCurriculars';
import { useLocale } from 'next-intl';
import React, { use } from 'react';

const ExperientialEducation = () => {
  const locale = useLocale();
  const advisory = use(coCurruculars.getExpEducationPage(locale));

  return <SectionContent content={advisory.data} />;
};

export default ExperientialEducation;
