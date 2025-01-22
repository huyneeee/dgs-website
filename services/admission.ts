import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import { getQuery } from './configs';

const getAdmission = async (locale: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/admission?${getQuery(locale)}`,
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

export const admission = Object.freeze({
  getAdmission,
});
