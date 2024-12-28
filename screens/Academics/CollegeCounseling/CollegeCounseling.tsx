import { academicsAPI } from '@/services/academics';
import { useLocale } from 'next-intl';
import React, { use } from 'react';
import Markdown from 'react-markdown';

const CollegeCounseling = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getAcademics(locale));

  const content = data.data.find(item => item.type === 'college-counseling');
  return (
    <div className="markdown">
      <Markdown>{content?.sections[0]?.description || ''}</Markdown>
    </div>
  );
};

export default CollegeCounseling;
