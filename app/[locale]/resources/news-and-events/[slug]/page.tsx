import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { articleAPI } from '@/services/articles';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams({ params }: Props) {
  const { locale } = await params;
  const { data: articles } = await articleAPI.getArticle(locale, 50);

  return articles.map(article => ({
    slug: article.slug,
    locale,
  }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale, slug } = await params;
  const data = await articleAPI.getMetaDataArticle(locale, slug);

  console.log('data', data);
  return generateMetadataFromData(data.data[0]?.seo);
}

export { default } from '@/screens/News/NewsDetailPage';
