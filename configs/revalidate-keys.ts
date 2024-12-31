/* You can add config revalidate into file /api/revalidate/route.ts */
export const REVALIDATE_KEYS = {
  articles: 'articles',
  global: 'global',
  teammember: 'teammember',
  'academics-story': 'academics-story',
  jobs: 'jobs',
  'club-and-activity': 'club-and-activity',
};

export enum STRAPI_MODEL {
  Articles = 'article',
  Global = 'global',
  Teammember = 'teammember',
  AcademicsStory = 'academics-story',
  ClubAndActivity = 'club-and-activity',
  Job = 'job',
}
