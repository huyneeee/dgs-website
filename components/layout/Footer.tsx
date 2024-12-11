import { Link } from '@/i18n/routing';
import { Mail, MapPinned, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Socials = [
  {
    icon: '/icons/socials/facebook.png',
    link: 'https://www.facebook.com/dgshanoi',
  },
  {
    icon: '/icons/socials/instagram.png',
    link: 'https://www.instagram.com/dgs_hanoi',
  },
  {
    icon: '/icons/socials/x.png',
    link: 'https://www.facebook.com/dgshanoi',
  },
  {
    icon: '/icons/socials/youtube.png',
    link: 'https://www.youtube.com/@DeltaGlobalSchoolDGS',
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
    <footer className='w-full bg-jungle'>
      <div className='container px-5 py-10 sm:px-10 sm:py-20 flex justify-between max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:gap-10'>
        <div className='max-sm:w-full'>
          <Image
            src='/images/logos/logo-2.png'
            width={240}
            height={100}
            alt='logo'
            className='flex-shrink-0 brightness-0 invert'
          />
          <p className='text-sm text-gray-100 mt-3 italic'>{t('slogan')}</p>
          <div className='flex text-white gap-3 mt-3'>
            {Socials.map((social, key) => (
              <Link key={key} href={social.link} target='_blank'>
                <Image
                  src={social.icon}
                  alt='link'
                  width={32}
                  height={32}
                  className='brightness-75 hover:brightness-100 hover:grayscale-0'
                />
              </Link>
            ))}
          </div>
        </div>

        <div className='flex sm:gap-24 max-sm:flex-wrap max-sm:gap-y-6'>
          <div className='flex flex-col text-white gap-3 max-sm:w-1/2'>
            <p className='text-base font-bold'>Resources</p>
            {Navs.map((item, key) => (
              <Link
                href={item.link}
                key={key}
                className='text-base text-white/70 font-light hover:text-white hover:underline underline-offset-2'
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className='flex flex-col text-white gap-3 max-sm:w-1/2'>
            <p className='text-base font-bold'>Resources</p>
            {Navs.map((item, key) => (
              <Link
                href={item.link}
                key={key}
                className='text-sm text-white/70 font-light hover:text-white hover:underline underline-offset-2'
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className='flex flex-col text-white gap-3 max-sm:w-full'>
            <p className='text-base font-bold'>Head Office</p>
            <a href='phone:0989123456' className='flex items-center gap-1 text-base text-white/70 font-light hover:text-white hover:underline underline-offset-2'>
              <Smartphone />
              0989123456
            </a>
            <a
              href='mailto:office@dgs.org.vn'
              className='flex items-center gap-1 text-base text-white/70 font-light hover:text-white hover:underline underline-offset-2'
            >
              <Mail />
              office@dgs.org.vn
            </a>
            <a
              href='https://www.google.com/maps/dir//LC,+L%C3%B4+H3,+khu+%C4%91%C3%B4+th%E1%BB%8B+Starlake,+B%E1%BA%AFc+T%E1%BB%AB+Li%C3%AAm,+H%C3%A0+N%E1%BB%99i+11900/@21.055627,105.7102985,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3135abe983b20481:0x1a9d3d4234f79268!2m2!1d105.7927002!2d21.0556469?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              className='flex items-start gap-1 sm:max-w-[300px] text-base text-white/70 font-light hover:text-white hover:underline underline-offset-2'
            >
              <MapPinned className='shrink-0' />
              The Dewey Schools Tay Ho Tay Lot H3-LC, Starlake Tay Ho Tay
              residential area Bac Tu Liem District, Hanoi
            </a>
          </div>
        </div>
      </div>
      <div className='container flex items-center justify-center border-t border-white/40 sm:py-10 py-5'>
        <p className='text-white/50 text-sm'>
          © 2024 DGS Country School | Privacy Policy
        </p>
      </div>
    </footer>
  );
};
