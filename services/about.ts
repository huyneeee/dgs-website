import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';

const getDeltasPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/the-deltas-page?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['the-deltas-page']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getMissionAndVision = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/mission-and-vision?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['mission-and-vision']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getDgsHistory = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/dgs-history?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['dgs-history']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getOurTeam = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-our-team?${getQuery(locale)}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['about-our-team']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

export const about = Object.freeze({
  getDeltasPage,
  getMissionAndVision,
  getDgsHistory,
  getOurTeam,
});
