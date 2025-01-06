import SectionContent from '@/components/layout/SectionContent';
import { resources } from '@/services/resources';
import { useLocale, useTranslations } from 'next-intl';
import { use } from 'react';

const PrivacyPolicy = () => {
  const t = useTranslations();
  const locale = useLocale();

  const policyData = use(resources.getPolicy(locale));

  return (
    <main className="bg-[#fafafa] flex flex-col w-full container xl:pb-20 pb-10 divide-y-[1px] divide-black">
      <h3 className="heading-2 my-3 lg:my-5 ">{t('PrivacyPolicy.title')}</h3>
      <SectionContent content={policyData.data} />
    </main>
  );
};

export default PrivacyPolicy;
