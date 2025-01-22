import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { articleAPI } from '@/services/articles';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams?: Promise<{ limit?: string; page?: string }>;
};

export async function generateStaticParams({ params, searchParams }: Props) {
  const { locale } = await params;
  const limit = parseInt((await searchParams)?.limit || '10') || 10;
  const page = parseInt((await searchParams)?.page || '0') || 0;
  const { data: articles } = await articleAPI.getArticle(locale, limit, page);

  return articles.map(article => ({
    slug: article.slug,
    locale,
  }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale, slug } = await params;
  const data = await articleAPI.getMetaDataArticle(locale, slug);

  return generateMetadataFromData(data.data[0]?.seo);
}

export { default } from '@/screens/News/NewsDetailPage';
