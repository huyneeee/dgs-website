/* eslint-disable @typescript-eslint/no-explicit-any */
import { paths } from '@/app/router';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import MenuMobile from './MenuMobile';
import SearchIcon from './SearchIcon';

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
        'z-50 flex container py-2 justify-between items-center bg-white sticky top-0 shadow-sm',
        type === 'transparent' && 'text-white',
        type === 'normal' && 'text-black',
      )}
    >
      <Link href={'/'} className="flex-shrink-0">
        <Image
          src="/images/logos/logo-4.png"
          alt="logo"
          width={219}
          height={90}
          priority
          className="md:w-[219px] md:h-[90px] w-[101px] h-[42px]"
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
                  className="hover:text-jungle px-0 underline-offset-4 hover:decoration-jungle hover:underline font-[600]"
                >
                  {t(`${nav[0]}.root` as any)}
                </Link>
              );
            }

            return (
              <HoverCard key={key} openDelay={300}>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Link
                      href={(nav[1] as any).root}
                      className="hover:text-jungle px-0 data-[state=open]:text-jungle text-current flex items-center gap-1 font-[600]"
                    >
                      {t(`${nav[0]}.root` as any)}
                      <ChevronDown size={14} className="hover:rotate-180" />
                    </Link>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="min-w-max flex flex-col gap-3">
                  {Object.entries(nav[1])
                    .slice(1)
                    .map((navChild, keyChild) => (
                      <Link
                        className="hover:text-jungle hover:font-semibold hover:underline pb-1 font-[600]"
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

        <SearchIcon />
      </div>

      <MenuMobile />
    </header>
  );
};

export default Navigation;
