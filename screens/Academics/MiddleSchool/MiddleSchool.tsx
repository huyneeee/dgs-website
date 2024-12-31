import { handleMedia } from '@/screens/News/NewsDetailPage';
import { academicsAPI } from '@/services/academics';
import { useLocale } from 'next-intl';
import { use } from 'react';

const MiddleSchool = () => {
  const locale = useLocale();
  const data = use(academicsAPI.getAcademics(locale));

  const content = data.data.find(item => item.type === 'middle-school');

  return (
    <div className="strapi-content mt-8 !font-montserrat">
      <div>
        <div className="relative w-full aspect-[16/9]">
          {handleMedia(content!.mainHero.image.url)}
        </div>

        {content!.mainHero.description && (
          <p className="image-description">{content!.mainHero.description}</p>
        )}
      </div>
      {content?.sections && (
        <div className="flex flex-col my-6 divide-y divide-[#000]">
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

                      {m.desc && <p className="image-description">{m.desc}</p>}
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
    </div>
  );
};

export default MiddleSchool;
