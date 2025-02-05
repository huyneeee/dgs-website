import { cn } from '@/lib/utils';
import { handleMedia } from '@/screens/News/NewsDetailPage';
import { coCurruculars } from '@/services/coCurriculars';
import { useLocale } from 'next-intl';
import React, { use } from 'react';

const Advisory = () => {
  const locale = useLocale();
  const advisory = use(coCurruculars.getAdvisoryPage(locale));

  const content = advisory.data;

  console.log('advisory', advisory);

  return (
    <section className="mt-6">
      <div>
        <div className="relative w-full aspect-[16/9]">
          {handleMedia(content!.mainHero.image.url)}
        </div>

        {content!.mainHero.description && (
          <p className="image-description">{content!.mainHero.description}</p>
        )}
      </div>
      <div className="strapi-content mt-2 !font-montserrat">
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
    </section>
  );
};

export default Advisory;
