import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';
import { get } from 'http';

const getPolicy = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/policy?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['policy']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getLibrary = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/library?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['library']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

export const resources = Object.freeze({
  getPolicy,
  getLibrary,
});
