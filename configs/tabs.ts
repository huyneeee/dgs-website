import { paths } from '@/app/router';
import en from '../messages/en.json';

type Navigations = (typeof en)['Navigation'];
export type MainNav = keyof Navigations;
type SubNav<T extends MainNav> = keyof Navigations[T];

type RouteProps = {
  [K in MainNav]: { title: SubNav<K>; link: string }[];
};

export const tabs: Partial<RouteProps> = {
  about: [
    { title: 'deltas', link: paths.about.deltas },
    { title: 'mission-and-vision', link: paths.about['mission-and-vision'] },
    { title: 'history', link: paths.about.history },
    { title: 'our-team', link: paths.about['our-team'] },
  ],
  academics: [
    { title: 'high-school', link: paths.academics['high-school'] },
    { title: 'middle-school', link: paths.academics['middle-school'] },
    // { title: "kindergarten", link: paths.academics.kindergarten },
    // { title: "primary-school", link: paths.academics["primary-school"] },
    {
      title: 'college-counselling',
      link: paths.academics['college-counselling'],
    },
  ],
  'co-curriculars': [
    {
      title: 'advisory',
      link: paths['co-curriculars']['advisory'],
    },
    {
      title: 'club-and-activities',
      link: paths['co-curriculars']['club-and-activities'],
    },
    {
      title: 'experiential-education',
      link: paths['co-curriculars']['experiential-education'],
    },
    // {
    //   title: "dgs-sport-program",
    //   link: paths["co-curriculars"]["dgs-sport-program"],
    // },
  ],
  'student-life': [
    {
      title: 'student-well-being',
      link: paths['student-life']['student-well-being'],
    },
    // {
    //   title: 'cpoms',
    //   link: paths['student-life']['cpoms'],
    // },
    {
      title: 'student-leadership',
      link: paths['student-life']['student-leadership'],
    },
  ],

  resources: [
    { title: 'news-and-events', link: paths.resources['news-and-events'] },
    { title: 'dgs-library', link: paths.resources['dgs-library'] },
    { title: 'policies', link: paths.resources['policies'] },
    { title: 'school-calendar', link: paths.resources['school-calendar'] },
    { title: 'handbook', link: paths.resources['handbook'] },
    { title: 'education-review', link: paths.resources['education-review'] },
    { title: 'contact', link: paths.resources['contact'] },
  ],
};
