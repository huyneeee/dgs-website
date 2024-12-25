'use client';
import { Transition, Variants, Variant, MotionProps } from 'motion/react';
import * as m from 'motion/react-m';
import { PropsWithChildren } from 'react';

const defaultVariants: Variants = {
  show: {
    opacity: 1,
    y: 0,
  },
  hide: {
    opacity: 0,
    y: 200,
  },
};

type PropsFadeInBox = {
  transitions?: Transition;
  className?: string;
  hide?: Variant;
  show?: Variant;
  viewport?: MotionProps['viewport'];
};

const FadeInBox = ({
  children,
  className,
  transitions,
  viewport,
  hide,
  show,
}: PropsWithChildren<PropsFadeInBox>) => {
  const variants = {
    show: {
      ...defaultVariants.show,
      ...show,
    },
    hide: {
      ...defaultVariants.hide,
      ...hide,
    },
  };

  return (
    <m.div
      className={className}
      initial="hide"
      variants={variants}
      transition={{
        duration: 0.3,
        ease: 'easeIn',
        ...transitions,
      }}
      whileInView="show"
      viewport={{
        once: true,
        ...viewport,
      }}
    >
      {children}
    </m.div>
  );
};

export default FadeInBox;
