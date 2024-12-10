import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export const StudentWellBeing = () => {
  return (
    <section
      id='student-well-being'
      className='flex items-center flex-col container sm:my-10 my-5 xl:gap-20 gap-10'
    >
      <div className='flex items-center xl:gap-16 lg:flex-row-reverse flex-col-reverse max-lg:gap-10'>
        <h3 className='xl:text-4xl sm:text-2xl text-lg italic max-lg:text-center'>
          DGS maintains strong safeguarding and child protection policies &
          procedures, this ensures that our students can pursue their education
          in a safe, secure, and caring environment.
        </h3>
        <Image
          src='/images/student-well-being/kid-1.jpg'
          alt='kid-1'
          width={500}
          height={350}
          className='rounded-2xl'
        />
      </div>
      <div className='flex items-center xl:gap-16 w-full h-[300px] xl:h-[500px] relative'>
        <Image
          src='/images/student-well-being/kid-2.jpg'
          alt='kid-2'
          className='rounded-2xl object-cover brightness-75 blur-[1px]'
          fill
          sizes='100vw'
        />
        <div className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex items-center justify-center flex-col sm:gap-10 gap-6'>
          <h3 className='xl:text-4xl italic text-white'>
            Our safeguarding policy
          </h3>
          <Button
            size='lg'
            className='rounded-lg bg-jungle hover:bg-jungle hover:brightness-90'
          >
            <Link href='/'>Read more</Link>
            <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
