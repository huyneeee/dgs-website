import BaseLayout from '@/components/layout/BaseLayout';
import { routing } from '@/i18n/routing';
import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { metaDataAPI } from '@/services/meta-data';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const data = await metaDataAPI.getMetaDataSite(locale);
  return generateMetadataFromData(data.data.seos, data.data.favicon);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
