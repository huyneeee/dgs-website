import { articleAPI } from '@/services/articles';
import { useLocale } from 'next-intl';
import { use } from 'react';
import NewsItem from '@/screens/News/NewsItem';

const NewsPage = () => {
  const locale = useLocale();
  const news = use(articleAPI.getArticle(locale, 10));
  return (
    <section id="news" className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
        {news.data.map((article, key) => (
          <NewsItem key={key} {...article} />
        ))}
      </div>
    </section>
  );
};

export default NewsPage;
