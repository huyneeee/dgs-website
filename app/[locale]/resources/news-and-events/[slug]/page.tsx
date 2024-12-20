import { articleAPI } from '@/services/articles';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams({ params }: Props) {
  const { locale } = await params;
  const { data: articles } = await articleAPI.getArticle(locale, 10);

  return articles.map((article) => ({
    slug: article.slug,
    locale,
  }));
}

export { default } from '@/screens/News/NewsDetailPage';
