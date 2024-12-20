/* You can add config revalidate into file /api/revalidate/route.ts */
export const REVALIDATE_KEYS = {
  articles: 'articles',
  global: 'global',
};

export enum STRAPI_MODEL {
  Articles = 'article',
  Global = 'global',
}
