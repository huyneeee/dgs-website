import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

type PropsCardPerson = {
  type?: 'square' | 'circle';
  size?: 'sm' | 'lg';
  avatarUrl: string;
  name: string;
  position: string;
  className?: string;
  onClick: VoidFunction;
};

export const CardPerson = ({
  type = 'square',
  size = 'lg',
  avatarUrl,
  name,
  position,
  className,
  onClick
}: PropsCardPerson) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col group cursor-pointer',
        type === 'circle' && 'justify-center items-center',
        className
      )}
    >
      <div
        className={cn(
          'relative w-full h-[300px]',
          type === 'circle' && 'aspect-square',
          size === 'sm' && 'h-24 w-24'
        )}
      >
        <Image
          src={avatarUrl}
          alt='avatar'
          fill
          sizes='33%vw'
          className={cn(
            'object-cover rounded-3xl group-hover:brightness-50',
            type === 'circle' && 'rounded-full'
          )}
        />
      </div>
      <h5 className='text-base text-gray-900 mt-3 sm:mt-6 font-bold group-hover:text-jungle min-w-max'>
        {name}
      </h5>
      <p className='muted min-w-max'>{position}</p>
    </div>
  );
};
