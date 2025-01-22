export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const title =
    params.locale === 'en' ? 'News and Events' : 'Tin tức và sự kiện';
  return {
    title: `${title} | Delta Global School`,
  };
}

export { default } from '@/screens/News/NewsPage';
