import { handleMedia } from '@/screens/News/NewsDetailPage';
import React from 'react';

const SectionContent = ({ content }: { content: SectionContent }) => {
  return (
    <section className="strapi-content !font-montserrat">
      {content!.mainHero && (
        <div>
          <div className="relative w-full aspect-[2/1] rounded-sm overflow-hidden">
            {handleMedia(content!.mainHero.image.url)}
          </div>

          {content!.mainHero.description && (
            <p className="image-description">{content!.mainHero.description}</p>
          )}
        </div>
      )}
      {content?.sections && (
        <div className="flex flex-col mb-6 divide-y divide-[#000]">
          {content.sections.map((section, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-8 py-4 md:py-8"
              >
                {section.media &&
                  section.media?.map(m => {
                    return (
                      <div key={m.id} className="w-full flex-1 flex flex-col">
                        {m.file.url && (
                          <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden">
                            {handleMedia(m.file.url)}
                          </div>
                        )}

                        {m.desc && (
                          <p className="image-description flex-1">{m.desc}</p>
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
                    dangerouslySetInnerHTML={{ __html: section.textContent }}
                  ></p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SectionContent;
