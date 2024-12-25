import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { articleAPI } from '@/services/articles';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams({ params }: Props) {
  const { locale } = await params;
  const { data: articles } = await articleAPI.getArticle(locale, 10);

  return articles.map(article => ({
    slug: article.slug,
    locale,
  }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale, slug } = await params;
  const data = await articleAPI.getMetaDataArticle(locale, slug);
  return generateMetadataFromData(data.data[0]?.seos);
}

export { default } from '@/screens/News/NewsDetailPage';
