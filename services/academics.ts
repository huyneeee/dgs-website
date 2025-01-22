import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';

const getMiddleSchoolPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/academics-middle-school?${getQuery(locale)}`,

    {
      next: {
        tags: [REVALIDATE_KEYS['academics-middle-school']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getHighSchoolPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/academics-high-school?${getQuery(locale)}`,

    {
      next: {
        tags: [REVALIDATE_KEYS['academics-high-school']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

const getCollegeCounselingPage = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/academics-college-counseling?${getQuery(locale)}`,

    {
      next: {
        tags: [REVALIDATE_KEYS['academics-college-counseling']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<SectionContent>;
};

export const academicsAPI = Object.freeze({
  getMiddleSchoolPage,
  getHighSchoolPage,
  getCollegeCounselingPage,
});
