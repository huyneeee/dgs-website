import { getImageLink } from '@/lib/utils';
import { articleAPI } from '@/services/articles';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import Image from 'next/image';

export function handleMedia(url: string) {
  const src = getImageLink(url);
  if (url.includes('mp4'))
    return (
      <video
        width="100%"
        height="100%"
        playsInline
        loop
        autoPlay
        muted
        controls
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );

  return <Image src={src} fill alt="newsImage" objectFit="cover" />;
}

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;
  const dataNews = await articleAPI.getDetailArticle(locale, slug);
  const news = dataNews.data[0];

  const newsUrl = `${process.env.NEXT_PUBLIC_LANDING_URL}/${locale}/resources/news-and-events/${slug}`;

  return (
    <div className="pb-[48px] flex flex-col gap-2">
      <div>
        <div className="relative w-full aspect-[16/9]">
          {handleMedia(news.mainHero.image.url)}
        </div>

        {news.mainHero.description && (
          <p className="image-description">{news.mainHero.description}</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 my-2 md:my-4">
        <div className="flex flex-col flex-1 gap-0 divide-y divide-[#000]">
          <h2 className="heading-2">{news.title}</h2>
          <p className="py-4">
            {dayjs(news.publishedAt)
              .locale(locale)
              .format('dddd, MMMM D, YYYY')}
          </p>
          <p className="py-4">By {news?.author?.name}</p>

          <div className="flex items-center gap-0 py-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Image
                width={32}
                height={32}
                src="/icons/socials/facebook.png"
                alt="fbIcon"
              />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(newsUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <Image
                width={32}
                height={32}
                src="/icons/socials/x.png"
                alt="x"
              />
            </a>
          </div>
        </div>

        <div
          className="strapi-content flex-1"
          dangerouslySetInnerHTML={{
            __html: dataNews.data?.[0]?.sections?.[0].textContent,
          }}
        ></div>
      </div>

      {news.sections.length > 1 && (
        <div className="flex flex-col gap-8">
          {news.sections.map((section, index) => {
            if (index === 0) return null;

            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
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
                {section.textContent && (
                  <div
                    className="strapi-content flex-1"
                    dangerouslySetInnerHTML={{ __html: section.textContent }}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;
