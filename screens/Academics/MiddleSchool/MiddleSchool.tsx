import { academicsAPI } from '@/services/academics';
import { useLocale } from 'next-intl';
import { use } from 'react';

const MiddleSchool = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getAcademics(locale));

  const content = data.data.find(item => item.type === 'middle-school');
  return (
    <div className="markdown">
      <div
        dangerouslySetInnerHTML={{
          __html: content?.sections[0]?.description || '',
        }}
      ></div>
    </div>
  );
};

export default MiddleSchool;
