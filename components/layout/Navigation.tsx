/* eslint-disable @typescript-eslint/no-explicit-any */
import { paths } from '@/app/router';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import MenuMobile from './MenuMobile';
import SwitchLanguage from './SwitchLanguage';

const DATA = Object.entries(paths).slice(1); // skip Home

const Navigation = ({
  type = 'normal',
}: {
  type: 'transparent' | 'normal';
}) => {
  const t = useTranslations('Navigation');
  return (
    <header
      className={cn(
        'flex container sm:py-10 py-5 justify-between items-center',
        type === 'transparent' &&
          'absolute w-full top-0 left-0 z-20 text-white',
        type === 'normal' && 'relative text-black',
      )}
    >
      <Link href={'/'} className="flex-shrink-0">
        <Image
          src="/images/logos/logo-4.png"
          alt="logo"
          width={175}
          height={72}
          priority
          className="xl:w-[175px] xl:h-[72px] w-[87px] h-[36px]"
        />
      </Link>
      <div className="items-center gap-2 hidden xl:flex">
        <nav className="flex items-center justify-between flex-auto gap-4">
          {DATA.map((nav, key) => {
            if (Object.keys(nav[1]).length === 1) {
              return (
                <Link
                  key={key}
                  href={(nav[1] as any).root}
                  className="hover:text-jungle px-0 underline-offset-4 hover:underline"
                >
                  {t(`${nav[0]}.root` as any)}
                </Link>
              );
            }

            return (
              <HoverCard key={key} openDelay={300}>
                <HoverCardTrigger asChild>
                  <Button
                    variant={'link'}
                    className="hover:text-jungle px-0 data-[state=open]:text-jungle text-current"
                  >
                    {t(`${nav[0]}.root` as any)}
                    <ChevronDown size={14} className="hover:rotate-180" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="min-w-max flex flex-col gap-3">
                  {Object.entries(nav[1])
                    .slice(1)
                    .map((navChild, keyChild) => (
                      <Link
                        className="hover:text-jungle hover:font-semibold hover:underline pb-1"
                        key={`${key}-${keyChild}`}
                        href={navChild[1]}
                      >
                        {t(`${nav[0]}.${navChild[0]}` as any)}
                      </Link>
                    ))}
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </nav>

        <Link
          href={{
            pathname: '/',
            query: {
              q: '',
            },
          }}
        >
          <Search />
        </Link>
      </div>

      <MenuMobile />
      <SwitchLanguage className="absolute right-10 bottom-8 max-xl:hidden" />
    </header>
  );
};

export default Navigation;
