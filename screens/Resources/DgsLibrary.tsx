import SectionContent from '@/components/layout/SectionContent';
import { resources } from '@/services/resources';
import { useLocale, useTranslations } from 'next-intl';
import { use } from 'react';

const DgsLibrary = () => {
  const t = useTranslations();
  const locale = useLocale();
  const admissionData = use(resources.getLibrary(locale));

  return (
    <main className="bg-[#fafafa] flex flex-col w-full container xl:pb-20 pb-10 divide-y-[1px] divide-black">
      <h3 className="heading-2 my-3 lg:my-5 ">{t('Library.title')}</h3>
      <SectionContent content={admissionData.data} />
    </main>
  );
};

export default DgsLibrary;
