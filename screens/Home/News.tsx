import { paths } from '@/app/router';
import { Button } from '@/components/ui/button';
import FadeInBox from '@/components/ui/fadein-box';
import { Link } from '@/i18n/routing';
import { useFormatter } from 'next-intl';
import Image from 'next/image';

const Data = [
  {
    image:
      'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/Timothy%20cardinal%202%207%20dec%202024%20-%203.png?itok=39OeT5WO',
    title:
      'Theologian and Fellow of Blackfriars Hall, Timothy Radcliffe, created a Cardinal by Pope Francis',
    date: '2024-12-09T00:00:00Z',
  },
  {
    image:
      'https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/Wildlife%20trade%20banner%202%20-%20Credit%20Getty%2C%20weerapatkiatdumrong.jpg?itok=IyhvWnQT',
    title:
      'New project aims to transform how wildlife trade is monitored and managed',
    date: '2024-12-09T00:00:00Z',
  },
  {
    image:
      'https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/GettyImages-2160701519_resize.jpg?itok=NqG3Xa6U',
    title:
      'Novo Nordisk announces £18.5 million of funding for a further 20 Postdoctoral Fellows',
    date: '2024-12-09T00:00:00Z',
  },
];

const Item = ({ title, image, date }: (typeof Data)[0]) => {
  const format = useFormatter();
  const dateTime = new Date(date);

  return (
    <FadeInBox className='flex flex-col flex-1 xl:gap-3 gap-2 group cursor-pointer'>
      <div className='relative w-full aspect-[3/2] rounded-lg overflow-hidden'>
        <Image
          src={image}
          alt='img-new'
          fill
          className='group-hover:scale-110 transition-transform duration-500 ease-linear'
          sizes='33vw'
        />
      </div>
      <Link
        href='/'
        className='sm:text-xl text-base line-clamp-2 group-hover:text-jungle group-hover:underline underline-offset-2'
      >
        {title}
      </Link>
      <p className='text-sm text-gray-500'>
        {format.dateTime(dateTime, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>
    </FadeInBox>
  );
};

export const News = () => {
  return (
    <section id='news' className='container xl:py-10 py-6'>
      <div className='flex items-center justify-between'>
        <h4 className='xl:text-3xl lg:text-xl text-lg font-bold'>
          The Latest News & Stories
        </h4>
        <Button variant='link'>
          <Link
            href={paths.home}
            className='text-jungle text-xs xl:text-sm uppercase'
          >
            view all
          </Link>
        </Button>
      </div>
      <div className='flex items-center justify-between xl:gap-14 sm:gap-10 gap-8 mt-6 max-lg:flex-col'>
        {Data.map((item, key) => (
          <Item {...item} key={key} />
        ))}
      </div>
    </section>
  );
};
