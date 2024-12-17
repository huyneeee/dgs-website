import Image from 'next/image';

export const Content = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className='sm:pt-10 pt-6'>
      <div className='relative w-full h-[300px] sm:h-[500px] rounded-lg overflow-hidden'>
        <Image src='https://picsum.photos/500' fill alt='bg' />
      </div>
      <h3 className='heading-3 lg:mt-8 lg:mb-6 mt-5 mb-3'>
        {title}
      </h3>
      <p className='leading-7'>{description}</p>
    </section>
  );
};
