'use client';
import NumberFlow, { NumberFlowGroup } from '@number-flow/react';
import { useInView } from 'motion/react';
import React, { useRef } from 'react';

const Data = [
  {
    title: 'school founded',
    number: 1907,
  },
  {
    title: 'student enrollment',
    number: 1300,
  },
  {
    title: 'student/faculty ratio',
    number: '5:1',
  },
  {
    title: 'acres in the bronx',
    number: 27.5,
  },
];

const Item = ({
  title,
  number,
  isInView,
}: (typeof Data)[0] & { isInView: boolean }) => {
  const arrNumber = typeof number === 'string' ? number.split(':') : [];
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      {typeof number === 'string' ? (
        <NumberFlowGroup>
          <div className="flex items-center gap-2">
            {arrNumber.map((n, key) => (
              <React.Fragment key={key}>
                <NumberFlow value={isInView ? +n : 0} className="text-6xl" />
                {key === 0 && <span className="text-6xl">:</span>}
              </React.Fragment>
            ))}
          </div>
        </NumberFlowGroup>
      ) : (
        <NumberFlow value={isInView ? number : 0} className="text-6xl" />
      )}

      <p className="muted uppercase">{title}</p>
    </div>
  );
};
export const Analysis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section ref={ref} id="analysis" className="container xl:py-10 py-6">
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-10 w-full">
        {Data.map((item, key) => (
          <Item key={key} {...item} isInView={isInView} />
        ))}
      </div>
    </section>
  );
};
