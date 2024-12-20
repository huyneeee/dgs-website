import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getArticle = async (locale: string, limit = 3) => {
  const query = qs.stringify(
    {
      locale,
      pagination: {
        start: 0,
        limit,
      },
      populate: ['cover'],
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    }
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.articles],
      },
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  return data as ResponseStrapi<Article[]>;
};

const getDetailArticle = async (locale: string, slug: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: '*',
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    }
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.articles],
      },
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  return data as ResponseStrapi<Article[]>;
};

const getMetaDataArticle = async (locale: string, slug: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: ['seos', 'seos.openGraph', 'seos.openGraph.ogImage'],
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    }
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.articles],
      },
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  return data as ResponseStrapi<Article[]>;
};

export const articleAPI = Object.freeze({
  getArticle,
  getDetailArticle,
  getMetaDataArticle,
});
