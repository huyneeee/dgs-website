import { paths } from '@/app/router';
import { Button } from '@/components/ui/button';
import FadeInBox from '@/components/ui/fadein-box';
import { Link } from '@/i18n/routing';
import { MoveRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const CoreValues = () => {
  const t = useTranslations();

  return (
    <section id="testimonials" className="container xl:py-10 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
        <div className="flex flex-col bg-[url('/icons/corevalue/ngoaikhoa.png')] relative p-4 md:p-8 gap-2">
          <div className="bg-[rgba(0,0,0,0.6)] absolute top-0 bottom-0 left-0 right-0 z-[1]"></div>

          <p className="text-[28px] md:text-[40px] text-white font-[700] relative z-10 text-center md:text-left">
            The Delta
          </p>

          <p className="text-[16px] md:text-[24px] font-[500] leading-[1.5] text-white text-center md:text-left relative z-10 w-full md:w-[70%]">
            Graduates are comprehensive individuals who are prepared in
            personality, knowledge, spirit and body for university, work and
            life, capable of adapting and succeeding in any situation.
          </p>

          <div className="text-center md:text-left mt-4 relative z-10">
            <Button
              size="lg"
              className="rounded-lg bg-jungle hover:bg-jungle hover:brightness-90 w-[180px]"
            >
              <Link href={paths.about.deltas}>{t('readMore')}</Link>
              <MoveRight />
            </Button>
          </div>
        </div>
        <div className=" bg-[#91a851] flex flex-col p-4 md:p-8 gap-4 md:gap-8">
          <FadeInBox
            hide={{
              y: 0,
              x: '100%',
            }}
            show={{
              y: 0,
              x: 0,
            }}
            transitions={{
              duration: 0.5,
            }}
            className="p-4 flex gap-2 md:gap-4 bg-white shadow-sm rounded-sm"
          >
            <div className="w-[30%] flex items-center justify-center">
              <Image
                alt="corevalue"
                src="/icons/corevalue/trust.png"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[18px] md:text-[22px] font-[600] text-jungle">
                Scholarly, Intimate Teaching
              </p>
              <p className="w-full text-[14px] md:text-[16px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                nulla est, minima ullam libero.
              </p>
            </div>
          </FadeInBox>

          <FadeInBox
            hide={{
              y: 0,
              x: '100%',
            }}
            show={{
              y: 0,
              x: 0,
            }}
            transitions={{
              duration: 0.5,
            }}
            className="p-4 flex gap-2 md:gap-4 bg-white shadow-sm rounded-sm"
          >
            <div className="w-[30%] flex items-center justify-center">
              <Image
                alt="corevalue"
                src="/icons/corevalue/trust.png"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[18px] md:text-[22px] font-[600] text-jungle">
                Scholarly, Intimate Teaching
              </p>
              <p className="w-full text-[14px] md:text-[16px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                nulla est, minima ullam libero.
              </p>
            </div>
          </FadeInBox>

          <FadeInBox
            hide={{
              y: 0,
              x: '100%',
            }}
            show={{
              y: 0,
              x: 0,
            }}
            transitions={{
              duration: 0.5,
            }}
            className="p-4 flex gap-2 md:gap-4 bg-white shadow-sm rounded-sm"
          >
            <div className="w-[30%] flex items-center justify-center">
              <Image
                alt="corevalue"
                src="/icons/corevalue/trust.png"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[18px] md:text-[22px] font-[600] text-jungle">
                Scholarly, Intimate Teaching
              </p>
              <p className="w-full text-[14px] md:text-[16px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                nulla est, minima ullam libero.
              </p>
            </div>
          </FadeInBox>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
