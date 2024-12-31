import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import NewsItem from '@/screens/News/NewsItem';
// import { Content } from '@/screens/About/Content';
// import NewsItem from '@/screens/News/NewsItem';
import { articleAPI } from '@/services/articles';
import { clubAndActivityApi } from '@/services/clubAndActivities';
import { useLocale } from 'next-intl';
import React, { use } from 'react';

const ClubAndActivities = () => {
  const locale = useLocale();
  const data = use(articleAPI.getArticle(locale));
  const clubAndActivity = use(clubAndActivityApi.getActivitiesPage(locale));

  console.log('clubAndActivity', clubAndActivity);

  return (
    <div>
      <section className="">
        <div
          className="strapi-content"
          dangerouslySetInnerHTML={{
            __html: clubAndActivity.data.sections,
          }}
        ></div>

        <div className="flex items-center justify-between">
          <h3 className="heading-3">The Latest News & Stories</h3>
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
    </div>
  );
};

export default ClubAndActivities;
