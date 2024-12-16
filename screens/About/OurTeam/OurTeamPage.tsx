'use client';
import { useTranslations } from 'next-intl';
import { CardPerson } from './CardPerson';
import { DialogDetailPerson } from './DialogDetailPerson';
import { useState } from 'react';

const OurTeam = () => {
  const [detail, setDetail] = useState(false);
  const t = useTranslations('AboutPage');

  const handleClickDetail = () => {
    setDetail(true);
  };
  return (
    <section id='our-team' className='mt-8'>
      {/* advisoryBoard */}
      <h3 className='lg:text-4xl text-2xl font-semibold text-gray-900 mb-4 lg:mb-6'>
        {t('advisoryBoard')}
      </h3>
      <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        <CardPerson
          name='Whitney Francis'
          position='Copywriter'
          avatarUrl='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
          onClick={handleClickDetail}
        />
        <CardPerson
          name='Michael Foster'
          position='Co-Founder / CTO'
          avatarUrl='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5'
          onClick={handleClickDetail}
        />
        <CardPerson
          name='Courtney Henry'
          position='Designer'
          avatarUrl='https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
          onClick={handleClickDetail}
        />
      </div>

      <div className='w-full h-[1px] bg-gray-400 my-6 lg:my-10' />

      {/* seniorLeadershipTeam */}
      <h3 className='lg:text-4xl text-2xl font-semibold text-gray-900 mb-4 lg:mb-6'>
        {t('seniorLeadershipTeam')}
      </h3>
      <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        <CardPerson
          name='Whitney Francis'
          position='Copywriter'
          avatarUrl='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
          onClick={handleClickDetail}
        />
        <CardPerson
          name='Michael Foster'
          position='Co-Founder / CTO'
          avatarUrl='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5'
          onClick={handleClickDetail}
        />
        <CardPerson
          name='Courtney Henry'
          position='Designer'
          avatarUrl='https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
          onClick={handleClickDetail}
        />
      </div>
      <div className='w-full h-[1px] bg-gray-400 my-6 lg:my-10' />

      {/* highSchool */}
      <h3 className='lg:text-4xl text-2xl font-semibold text-gray-900 mb-4 lg:mb-6'>
        {t('highSchool')}
      </h3>
      <div className='w-full grid xl:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-5'>
        <CardPerson
          type='circle'
          name='Whitney Francis'
          position='Copywriter'
          avatarUrl='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
          onClick={handleClickDetail}
          size='sm'
        />
        <CardPerson
          type='circle'
          name='Michael Foster'
          position='Co-Founder / CTO'
          avatarUrl='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5'
          onClick={handleClickDetail}
          size='sm'
        />
        <CardPerson
          type='circle'
          name='Courtney Henry'
          position='Designer'
          avatarUrl='https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
          onClick={handleClickDetail}
          size='sm'
        />
        <CardPerson
          type='circle'
          name='Leonard Krasner'
          position='Senior Designer'
          avatarUrl='https://images.unsplash.com/photo-1519345182560-3f2917c472ef'
          onClick={handleClickDetail}
          size='sm'
        />
        <CardPerson
          type='circle'
          name='Emily Selman'
          position='VP, User Experience'
          avatarUrl='https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
          onClick={handleClickDetail}
          size='sm'
        />
        <CardPerson
          type='circle'
          name='Alicia Bell'
          position='Junior Copywriter'
          avatarUrl='https://images.unsplash.com/photo-1509783236416-c9ad59bae472'
          onClick={handleClickDetail}
          size='sm'
        />
      </div>

      <DialogDetailPerson open={detail} onClose={() => setDetail(false)} />
    </section>
  );
};

export default OurTeam;
