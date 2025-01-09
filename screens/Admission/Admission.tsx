import SectionContent from '@/components/layout/SectionContent';
import { admission } from '@/services/admission';
import { useLocale, useTranslations } from 'next-intl';
import { use } from 'react';

const Admission = () => {
  const t = useTranslations();
  const locale = useLocale();
  const admissionData = use(admission.getAdmission(locale));

  return (
    <section className="container">
      <h3 className="heading-2">{t('Admission.title')}</h3>
      <SectionContent content={admissionData.data} />
    </section>
  );
};

export default Admission;
