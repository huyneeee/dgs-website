import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export const MainHero = () => {
  const t = useTranslations();
  return (
    <div className="w-screen h-[calc(100svh-66px)] md:h-[calc(100svh-114px)] lg:h-[calc(100svh-130px)] relative">
      <video
        width="100%"
        height="100%"
        playsInline
        loop
        autoPlay
        muted
        src="/videos/introduction.mp4"
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/introduction.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col absolute top-0 left-0 ring-0 bottom-0 justify-center px-4 md:px-10 xl:gap-16 gap-10">
        <h3 className="text-5xl lg:text-7xl md:text-6xl leading-[60px] md:!leading-[80px] sm:max-w-[80%] md:max-w-[60%] text-background font-extrabold [text-shadow:_1px_1px_0px_rgba(0,0,0,0.6)]">
          {t('mainHeroDesc')}
        </h3>
        <Link
          href="/"
          className="text-background text-lg sm:text-xl uppercase pb-2 border-b-4 border-background w-fit font-bold font-sans hover:text-bamboo hover:border-bamboo [text-shadow:_1px_1px_0px_rgba(0,0,0,0.6)]"
        >
          {t('readMore')}
        </Link>
      </div>
    </div>
  );
};
