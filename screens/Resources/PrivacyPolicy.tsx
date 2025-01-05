import { policy } from '@/services/policy';
import { useLocale, useTranslations } from 'next-intl';
import { use } from 'react';
import { handleMedia } from '../News/NewsDetailPage';

const PrivacyPolicy = () => {
  const t = useTranslations();
  const locale = useLocale();
  const policyData = use(policy.getPolicy(locale));

  const content = policyData.data;

  return (
    <main className="bg-[#fafafa] flex flex-col w-full container xl:pb-20 pb-10 divide-y-[1px] divide-black">
      <h3 className="heading-2 my-3 lg:my-5 ">{t('PrivacyPolicy.title')}</h3>

      <section className="mt-6 ">
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
            <div className="flex flex-col my-0 divide-y divide-[#000]">
              {content.sections.map((section, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 md:gap-8 py-4 md:py-8"
                  >
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
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
