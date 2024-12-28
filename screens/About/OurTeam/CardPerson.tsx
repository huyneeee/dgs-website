import { cn, getImageLink } from '@/lib/utils';
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
  onClick,
}: PropsCardPerson) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex flex-col group cursor-pointer',
        type === 'circle' && 'justify-center items-center',
        className,
      )}
    >
      <div
        className={cn(
          'relative w-full aspect-square',
          type === 'circle' && 'aspect-square',
          size === 'sm' && 'h-24 w-24',
        )}
      >
        <Image
          priority
          src={getImageLink(avatarUrl)}
          alt="avatar"
          fill
          className={cn(
            'object-cover rounded-xl group-hover:brightness-50',
            type === 'circle' && 'rounded-full',
          )}
        />
      </div>
      <h5 className="text-base mt-3 sm:mt-6 font-bold text-jungle min-w-max text-[22px]">
        {name}
      </h5>
      <p className="text-[18px] mt-2">{position}</p>
    </div>
  );
};
