import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import { Link } from '@/i18n/routing';
import NewsItem from '../News/NewsItem';
import { use } from 'react';
import { useLocale } from 'next-intl';
import { articleAPI } from '@/services/articles';

const AcademicsStories = () => {
  const locale = useLocale();
  const data = use(articleAPI.getArticle(locale));

  return (
    <section id="news" className="xl:py-10 py-6">
      <div className="flex items-center justify-between">
        <h3 className="heading-3">The Latest Academic Stories</h3>
        <Link
          href="/"
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

export default AcademicsStories;
