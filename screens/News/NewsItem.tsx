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
      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
        <Image
          src={cover?.url || ''}
          alt="img-new"
          fill
          className="group-hover:scale-110 transition-transform duration-500 ease-linear"
          sizes="33vw"
          loader={strapiLoaderImg}
        />
      </div>
      <Link
        href={`${paths.resources['news-and-events']}/${slug}`}
        className="sm:text-lg text-base line-clamp-2 group-hover:text-jungle group-hover:underline underline-offset-2"
      >
        {title}
      </Link>
      <p className="muted">
        {format.dateTime(dateTime, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>
    </FadeInBox>
  );
};

export default NewsItem;
