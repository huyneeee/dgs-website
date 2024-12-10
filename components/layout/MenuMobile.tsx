/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { paths } from '@/app/router';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { ChevronRight, Menu, Search, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SwitchLanguage from './SwitchLanguage';

const DATA = Object.entries(paths).slice(1); // skip Home

const MenuMobile = () => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations('Navigation');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <Sheet open={isOpen} modal={false} onOpenChange={(open) => setIsOpen(open)}>
      <SheetTrigger asChild>
        <Button variant='ghost' className='xl:hidden flex'>
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='w-full h-full flex flex-col'>
        <SheetHeader className='hidden'>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here</SheetDescription>
        </SheetHeader>
        <div className='flex items-center justify-between'>
          <Image
            src='/images/logos/logo-4.png'
            alt='logo'
            width={87}
            height={36}
            priority
            className='w-[87px] h-[36px]'
          />
          <Button onClick={() => setIsOpen(false)} variant='ghost' size='icon'>
            <X size={24} />
          </Button>
        </div>
        <div className='flex w-full max-w-sm items-center space-x-2'>
          <Input
            type='text'
            placeholder='Search'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => {
              replace({
                pathname,
                query: {
                  q: input,
                },
              });
            }}
            type='submit'
            size='icon'
          >
            <Search />
          </Button>
        </div>
        <div className='flex-auto overflow-y-auto'>
          {DATA.map((nav, key) => (
            <Collapsible key={key} className='group/collapsible'>
              <CollapsibleTrigger className='flex items-center py-3 group-data-[state=open]/collapsible:font-semibold group-data-[state=open]/collapsible:text-jungle'>
                {t(`${nav[0]}.root` as any)}
                <ChevronRight
                  size={16}
                  className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90'
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className='flex flex-col gap-2 pl-5'>
                  {Object.entries(nav[1])
                    .slice(1)
                    .map((navChild, keyChild) => (
                      <Link
                        className='hover:text-jungle hover:font-semibold hover:underline pb-1'
                        key={`${key}-${keyChild}`}
                        href={navChild[1]}
                      >
                        {t(`${nav[0]}.${navChild[0]}` as any)}
                      </Link>
                    ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
        <SwitchLanguage />
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
