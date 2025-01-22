export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const title = locale === 'en' ? 'News and Events' : 'Tin tức và sự kiện';
  return {
    title: `${title} | Delta Global School`,
  };
}

export { default } from '@/screens/News/NewsPage';
