import SectionContent from '@/components/layout/SectionContent';
import { resources } from '@/services/resources';
import { useLocale } from 'next-intl';
import { use } from 'react';

const PrivacyPolicy = () => {
  const locale = useLocale();

  const policyData = use(resources.getPolicy(locale));

  return <SectionContent content={policyData.data} />;
};

export default PrivacyPolicy;
