import { articleAPI } from '@/services/articles';

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;
  const dataNews = await articleAPI.getDetailArticle(locale, slug);

  return (
    <div>
      NewsDetailPage
      {slug}
      {JSON.stringify(dataNews, null)}
    </div>
  );
};

export default NewsDetailPage;
