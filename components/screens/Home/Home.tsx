import { Analysis } from './Analysis';
import { MainHero } from './MainHero';
import { News } from './News';
import { Testimonials } from './Testimonials';

const HomePage = () => {
  return (
    <main className='flex flex-col w-full'>
      <MainHero />
      <News />
      <Testimonials />
      <Analysis />
      {/* <div className='container flex items-center justify-center sm:py-10 py-5'>
        <h2 className='text-6xl text-jungle'>Be Kind, Be Curious, Be Courageous</h2>
      </div> */}
    </main>
  );
};

export default HomePage;
