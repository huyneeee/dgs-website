import { cn } from '@/lib/utils';
import { handleMedia } from '@/screens/News/NewsDetailPage';
import React from 'react';
import FadeInBox from '../ui/fadein-box';

const SectionContent = ({ content }: { content: SectionContent }) => {
  return (
    <section className="strapi-content !font-montserrat">
      {content!.mainHero && (
        <div>
          <div className="relative w-full aspect-[2/1] overflow-hidden">
            {handleMedia(content!.mainHero.image.url)}
          </div>

          {content!.mainHero.description && (
            <p className="image-description">{content!.mainHero.description}</p>
          )}
        </div>
      )}
      {content?.sections && (
        <div className="flex flex-col mb-6 gap-2 md:gap-4 mt-8">
          {content.sections.map((section, index) => {
            return (
              <FadeInBox
                key={index}
                // hide={{
                //   y: 0,
                //   x: '100%',
                // }}
                // show={{
                //   y: 0,
                //   x: 0,
                // }}
                // transitions={{
                //   duration: 0.5,
                // }}
              >
                <div
                  key={index}
                  className={cn(
                    'flex gap-6 md:gap-8',
                    section.contentOrder === 'image-text'
                      ? 'flex-col md:flex-row'
                      : 'flex-col-reverse md:flex-row-reverse',
                  )}
                >
                  {!!section.media?.length && (
                    <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
                      {section.media?.map(m => {
                        return (
                          <div
                            key={m.id}
                            className="w-full flex-1 flex flex-col"
                          >
                            {m?.file?.url && (
                              <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
                                {handleMedia(m.file.url)}
                              </div>
                            )}

                            {m.desc && (
                              <p className="image-description flex-1">
                                {m.desc}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {(section.title || section.textContent) && (
                    <div className="flex flex-col gap-4 flex-1">
                      {section.title && (
                        <p className="text-[28px] md:text-[40px] text-jungle font-[500]">
                          {section.title}
                        </p>
                      )}

                      {section.textContent && (
                        <>
                          <p
                            className="strapi-content font-[400]"
                            dangerouslySetInnerHTML={{
                              __html: section.textContent,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                  )}
                </div>
                {(section.title || !!section.media?.length) &&
                  index < content.sections.length - 1 && (
                    <div className="divide-line" />
                  )}
              </FadeInBox>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SectionContent;
