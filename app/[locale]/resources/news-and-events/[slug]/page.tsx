import { generateMetadataFromData } from '@/lib/generateMetaDataFromData';
import { articleAPI } from '@/services/articles';

interface StaticProps {
  params: { locale: string; slug: string; limit?: string; page?: string };
}

export async function generateStaticParams({ params }: StaticProps) {
  const { locale } = params;
  const limit = parseInt(params?.limit || '10') || 10;
  const page = parseInt(params?.page || '0') || 0;
  const { data: articles } = await articleAPI.getArticle(locale, limit, page);

  return articles.map(article => ({
    slug: article.slug,
    locale,
  }));
}

interface MetaDateProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: MetaDateProps) {
  const { locale, slug } = await params;
  const data = await articleAPI.getMetaDataArticle(locale, slug);

  return generateMetadataFromData(data.data[0]?.seo);
}

export { default } from '@/screens/News/NewsDetailPage';
