import { paths } from "@/app/router";
import en from "../messages/en.json";

type Navigations = (typeof en)["Navigation"];
export type MainNav = keyof Navigations;
type SubNav<T extends MainNav> = keyof Navigations[T];

type RouteProps = {
  [K in MainNav]: { title: SubNav<K>; link: string }[];
};

export const tabs: Partial<RouteProps> = {
  about: [
    { title: "deltas", link: paths.about.deltas },
    { title: "mission-and-vision", link: paths.about["mission-and-vision"] },
    { title: "history", link: paths.about.history },
    { title: "our-team", link: paths.about["our-team"] },
  ],
  academics: [
    // { title: "kindergarten", link: paths.academics.kindergarten },
    // { title: "primary-school", link: paths.academics["primary-school"] },
    { title: "middle-school", link: paths.academics["middle-school"] },
    { title: "high-school", link: paths.academics["high-school"] },
    {
      title: "college-counselling",
      link: paths.academics["college-counselling"],
    },
  ],
  "co-curriculars": [
    {
      title: "club-and-activities",
      link: paths["co-curriculars"]["club-and-activities"],
    },
    {
      title: "advisory",
      link: paths["co-curriculars"]["advisory"],
    },
    {
      title: "experiential-education",
      link: paths["co-curriculars"]["experiential-education"],
    },
    // {
    //   title: "dgs-sport-program",
    //   link: paths["co-curriculars"]["dgs-sport-program"],
    // },
  ],
  "student-life": [
    {
      title: "student-well-being",
      link: paths["student-life"]["student-well-being"],
    },
    {
      title: "cpoms",
      link: paths["student-life"]["cpoms"],
    },
    {
      title: "leadership-opportunities",
      link: paths["student-life"]["leadership-opportunities"],
    },
  ],
};
