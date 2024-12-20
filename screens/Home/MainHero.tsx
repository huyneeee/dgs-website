import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export const MainHero = () => {
  const t = useTranslations();
  return (
    <div className='w-screen h-svh relative'>
      <video
        width='100%'
        height='100%'
        playsInline
        loop
        autoPlay
        muted
        src='/videos/introduction.mp4'
        className='absolute w-full h-full object-cover'
      >
        <source src='/videos/introduction.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='container mx-auto'>
        <div className='flex flex-col absolute top-1/2 -translate-y-1/2 z-[2] xl:gap-16 gap-10'>
          <h3 className='lg:text-7xl sm:text-5xl text-4xl text-background sm:max-w-[60%] font-extrabold'>
            {t('mainHeroDesc')}
          </h3>
          <Link
            href='/'
            className='text-background text-lg sm:text-xl uppercase pb-2 border-b-4 border-background w-fit font-bold font-sans hover:text-bamboo hover:border-bamboo'
          >
            {t('readMore')}
          </Link>
        </div>
      </div>
    </div>
  );
};
