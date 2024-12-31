import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { handleMedia } from '@/screens/News/NewsDetailPage';
import NewsItem from '@/screens/News/NewsItem';
// import { Content } from '@/screens/About/Content';
// import NewsItem from '@/screens/News/NewsItem';
import { articleAPI } from '@/services/articles';
import { coCurruculars } from '@/services/coCurriculars';
import { section } from 'motion/react-m';
import { useLocale } from 'next-intl';
import React, { use } from 'react';

const ClubAndActivities = () => {
  const locale = useLocale();
  const data = use(articleAPI.getArticle(locale));
  const clubAndActivity = use(coCurruculars.getActivitiesPage(locale));

  const content = clubAndActivity.data;

  console.log('clubAndActivity', clubAndActivity);

  return (
    <section className="">
      <div className="strapi-content !font-montserrat">
        {content?.sections && (
          <div className={cn('flex flex-col my-0 divide-y divide-[#000]')}>
            {content.sections.map((section, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 py-4 md:py-8"
                >
                  {section.media?.map(m => {
                    return (
                      <div key={m.id} className="w-full flex-1">
                        <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
                          {handleMedia(m.file.url)}
                        </div>

                        {m.desc && (
                          <p className="image-description">{m.desc}</p>
                        )}
                      </div>
                    );
                  })}

                  {section.title && (
                    <p className="flex-1 text-[40px]">{section.title}</p>
                  )}

                  {section.textContent && (
                    <p
                      className="strapi-content flex-1 font-[400]"
                      dangerouslySetInnerHTML={{
                        __html: section.textContent,
                      }}
                    ></p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

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
  );
};

export default ClubAndActivities;
