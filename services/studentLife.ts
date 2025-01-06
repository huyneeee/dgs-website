import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';

const getCpoms = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/cpoms-page?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['cpoms-page']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getStudentWellBeing = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/student-well-being?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['admission']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getLeadershipOpportunity = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/leadership-opportunity?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['leadership-opportunities']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

export const studentLife = Object.freeze({
  getCpoms,
  getStudentWellBeing,
  getLeadershipOpportunity,
});
