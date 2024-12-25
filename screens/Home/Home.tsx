import { Analysis } from './Analysis';
import { MainHero } from './MainHero';
import { News } from './News';
import { StudentWellBeing } from './StudentWellBeing';
import { Testimonials } from './Testimonials';

const HomePage = () => {
  return (
    <main className="flex flex-col w-full">
      <MainHero />
      <News />
      <Testimonials />
      <Analysis />
      <StudentWellBeing />
    </main>
  );
};

export default HomePage;
