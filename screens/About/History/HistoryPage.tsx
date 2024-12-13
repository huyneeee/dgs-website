import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { TabContent } from '@/screens/About/TabContent';

const History = () => {
  const t = useTranslations('AboutPage');
  return (
    <main className='bg-[#fafafa] flex flex-col w-full container xl:pb-40'>
      <Link
        href={paths.about.root}
        className='text-4xl lg:text-6xl font-bold my-3 lg:my-5 hover:text-jungle'
      >
        {t('title')}
      </Link>
      <TabContent tabActive='history' />
    </main>
  );
};

export default History;
