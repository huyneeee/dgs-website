import Image from 'next/image';
import React from 'react';

const AcademicsStatement = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center p-[20px] sm:p-[40px] md:p-[56px] gap-4 sm:gap-6 md:gap-8 bg-[#eae3d1]">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full aspect-square max-w-[400px] rounded-[1px] overflow-hidden relative ">
            <Image
              src="/images/statement/statement-1.webp"
              alt="academics-statement"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col gap-[16px] md:gap-[48px] w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl md:text-5xl font-[700] text-[#91a851]">
            To empower students to become the best versions of themselves.
          </h3>
          <p className="text-[#91a851] text-[14px] md:text-[16px]">
            Whether you’re a student eager to ignite your academic passions,
            gain valuable professional experience, discover your ideal college
            fit, or something in between, Empowerly is here to help you
            succeed—every step of the way.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center p-[20px] sm:p-[40px] md:p-[56px] gap-4 sm:gap-6 md:gap-8 bg-[#91a851]">
        <div className="flex flex-col gap-[16px] md:gap-[48px] w-full md:w-1/2 text-center md:text-right text-white">
          <h3 className="text-2xl md:text-5xl font-[700] ">
            To empower students to become the best versions of themselves.
          </h3>
          <p className=" text-[14px] md:text-[16px]">
            Whether you’re a student eager to ignite your academic passions,
            gain valuable professional experience, discover your ideal college
            fit, or something in between, Empowerly is here to help you
            succeed—every step of the way.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full aspect-square max-w-[400px] rounded-[1px] overflow-hidden relative ">
            <Image
              src="/images/statement/statement-1.webp"
              alt="academics-statement"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsStatement;
