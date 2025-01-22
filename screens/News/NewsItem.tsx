import { paths } from '@/app/router';
import FadeInBox from '@/components/ui/fadein-box';
import { Link } from '@/i18n/routing';
import strapiLoaderImg from '@/lib/loader';
import { useFormatter } from 'next-intl';
import Image from 'next/image';

const NewsItem = ({ title, cover, publishedAt, slug }: Article) => {
  const format = useFormatter();
  const dateTime = new Date(publishedAt);

  return (
    <FadeInBox className="flex flex-col flex-1 xl:gap-3 gap-2 group cursor-pointer w-full">
      <Link
        className="flex flex-col gap-2"
        href={`${paths.resources['news-and-events']}/${slug}`}
      >
        <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden">
          <Image
            src={cover?.url || ''}
            alt="img-new"
            fill
            className="group-hover:scale-110 transition-transform duration-500 ease-linear"
            sizes="33vw"
            loader={strapiLoaderImg}
            objectFit="cover"
          />
        </div>
        <p className="sm:text-lg text-base line-clamp-2 hover:text-jungle hover:underline underline-offset-2 font-[600]">
          {title}
        </p>
        <p className="muted font-[500]">
          {format.dateTime(dateTime, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </Link>
    </FadeInBox>
  );
};

export default NewsItem;
