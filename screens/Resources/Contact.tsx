import SectionContent from '@/components/layout/SectionContent';
import { resources } from '@/services/resources';
import { useLocale } from 'next-intl';
import React, { use } from 'react';

const Contact = () => {
  const locale = useLocale();
  const contactData = use(resources.getContact(locale));

  return <SectionContent content={contactData.data} />;
};

export default Contact;
