import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import { Mail, MapPinned, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SwitchLanguage from './SwitchLanguage';

const Socials = [
  {
    icon: '/icons/socials/facebook.png',
    link: 'https://www.facebook.com/dgshanoi',
    text: 'Facebook',
  },
  {
    icon: '/icons/socials/instagram.png',
    link: 'https://www.instagram.com/dgs_hanoi',
    text: 'Instagram',
  },
  {
    icon: '/icons/socials/x.png',
    link: 'https://www.facebook.com/dgshanoi',
    text: 'Twitter',
  },
  {
    icon: '/icons/socials/youtube.png',
    link: 'https://www.youtube.com/@DeltaGlobalSchoolDGS',
    text: 'Youtube',
  },
];

const Navs = [
  {
    link: '/',
    text: 'Penn Fellows',
  },
  {
    link: '/',
    text: '2024-2025 Calendar',
  },
  {
    link: '/',
    text: 'Careers',
  },
  {
    link: '/',
    text: 'Athletics',
  },
  {
    link: '/',
    text: 'Stories',
  },
];

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="w-full bg-jungle">
      <div className="container px-5 py-10 sm:px-10 sm:py-20 flex justify-between max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:gap-10">
        <div className="max-sm:w-full">
          <Image
            src="/images/logos/logo-2.png"
            width={240}
            height={100}
            alt="logo"
            className="flex-shrink-0 brightness-0 invert"
          />
          <p className="text-sm text-gray-100 mt-3 italic">{t('slogan')}</p>
          <div className="flex text-white gap-3 mt-3">
            {Socials.map((social, key) => (
              <Link key={key} href={social.link} target="_blank">
                <Image
                  src={social.icon}
                  alt="link"
                  width={42}
                  height={42}
                  className="brightness-75 hover:brightness-100 hover:grayscale-0"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex sm:gap-24 max-sm:flex-wrap max-sm:gap-y-6">
          <div className="flex flex-col text-white gap-3 max-sm:w-1/2">
            <p className="text-base font-bold">{t('Footer.Resources')}</p>
            {Navs.map((item, key) => (
              <Link
                href={item.link}
                key={key}
                className="text-base font-light hover:underline underline-offset-2"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-col text-white gap-3 max-sm:w-1/2">
            <p className="text-base font-bold">{t('Footer.SocialMedia')}</p>
            {Socials.map((item, key) => (
              <Link
                href={item.link}
                key={key}
                className="text-sm font-light hover:underline underline-offset-2"
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="flex flex-col text-white gap-3 max-sm:w-full">
            <p className="text-base font-bold">{t('Footer.HeadOffice')}</p>
            <a
              href="phone:0989123456"
              className="flex items-center gap-1 text-base font-light hover:underline underline-offset-2"
            >
              <Smartphone />
              0989123456
            </a>
            <a
              href="mailto:office@dgs.org.vn"
              className="flex items-center gap-1 text-base font-light hover:underline underline-offset-2"
            >
              <Mail />
              office@dgs.org.vn
            </a>
            <a
              href="https://www.google.com/maps/place/The+Dewey+Schools+T%C3%A2y+H%E1%BB%93+T%C3%A2y/@21.0550167,105.7877679,16.31z/data=!4m6!3m5!1s0x3135abe983b20481:0x1a9d3d4234f79268!8m2!3d21.0556469!4d105.7927002!16s%2Fg%2F11qr5ln4rg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="flex items-start gap-1 sm:max-w-[300px] text-base font-light hover:underline underline-offset-2"
            >
              <MapPinned className="shrink-0" />
              The Dewey Schools Tay Ho Tay LC, Lot H3, Starlake residential
              area, Bac Tu Liem District, Hanoi
            </a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-center border-t border-white/40 sm:py-10 py-5">
        <p className="text-background text-sm">
          © 2024 DGS Country School |{' '}
          <Link
            className="underline opacity-60 hover:opacity-100"
            href={'/privacy-policy'}
          >
            {t('PrivacyPolicy.title')}
          </Link>
        </p>
      </div>

      <SwitchLanguage className="fixed right-8 bottom-0 z-[999999]" />
    </footer>
  );
};
