import BaseLayout from '@/components/layout/BaseLayout';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const urlImages =
  process.env.NEXT_PUBLIC_LANDING_URL + '/images/opengraph-image.png';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'MetaData' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(process.env.NEXT_PUBLIC_LANDING_URL || ''),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: urlImages,
      type: 'website',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      images: urlImages,
    },
    icons: {
      icon: '/images/meta/favicon.png',
      apple: '/images/meta/apple-touch-icon.png',
      shortcut: '/images/meta/favicon.png',
    },
  };
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
