import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';

const getAcademics = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/academics-stories?${getQuery(locale)}`,

    {
      next: {
        tags: [REVALIDATE_KEYS['academics-story']],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<Academics[]>;
};

export const academicsAPI = Object.freeze({
  getAcademics,
});
