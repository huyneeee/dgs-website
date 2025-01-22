import { articleAPI } from '@/services/articles';
import { useLocale } from 'next-intl';
import { use } from 'react';
import NewsItem from '@/screens/News/NewsItem';
import { PaginationWithLinks } from '@/components/ui/pagination-with-link';

const NewsPage = ({
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ limit?: string; page?: string }>;
}) => {
  const queryParams = use(searchParams);
  const limit = parseInt(queryParams?.limit || '10') || 10;
  const page = parseInt(queryParams?.page || '1') || 1;
  const locale = useLocale();

  const { data: news, meta } = use(articleAPI.getArticle(locale, limit, page));

  return (
    <div className="flex flex-col">
      <div
        id="news"
        className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5"
      >
        {news.map((article, key) => (
          <NewsItem key={key} {...article} />
        ))}
      </div>

      <PaginationWithLinks
        page={page}
        pageSize={meta.pagination.limit}
        totalCount={meta.pagination.total}
      />
    </div>
  );
};

export default NewsPage;
