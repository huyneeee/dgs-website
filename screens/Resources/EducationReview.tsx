import { useTranslations } from 'next-intl';
import React from 'react';

const EducationReview = () => {
  const t = useTranslations();

  return (
    <main className="bg-[#fafafa] flex flex-col w-full container xl:pb-20 pb-10 divide-y-[1px] divide-black">
      <h3 className="heading-2 my-3 lg:my-5 ">{t('EducationReview.title')}</h3>
      <div>Coming soon</div>
    </main>
  );
};

export default EducationReview;
