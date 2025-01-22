import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import { articleAPI } from '@/services/articles';
import { useLocale } from 'next-intl';
import { use } from 'react';
import NewsItem from '@/screens/News/NewsItem';

export const News = () => {
  const locale = useLocale();
  const data = use(articleAPI.getArticle(locale, 3));

  return (
    <section id="news" className="container xl:py-10 py-6">
      <div className="flex items-center justify-between">
        <h3 className="heading-2">The Latest News & Stories</h3>
        <Link
          href={paths.resources['news-and-events']}
          className="text-jungle text-xs xl:text-sm uppercase hover:underline underline-offset-2"
        >
          view all
        </Link>
      </div>
      <div className="flex items-center justify-between w-full xl:gap-14 sm:gap-10 gap-8 mt-6 max-lg:flex-col">
        {(data.data || []).map((item, key) => (
          <NewsItem {...item} key={key} />
        ))}
      </div>
    </section>
  );
};
