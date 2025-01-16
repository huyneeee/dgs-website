import { Analysis } from './Analysis';
import CoreValues from './CoreValues';
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
      <CoreValues />
    </main>
  );
};

export default HomePage;
