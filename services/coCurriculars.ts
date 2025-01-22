import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';

const getActivitiesPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/club-and-activity?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['club-and-activity']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getAdvisoryPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advisory?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['advisory']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getExpEducationPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/experiential-education?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['experiential-education']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

export const coCurruculars = Object.freeze({
  getActivitiesPage,
  getAdvisoryPage,
  getExpEducationPage,
});
