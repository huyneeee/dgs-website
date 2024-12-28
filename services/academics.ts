import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getAcademics = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: [
        'seos',
        'seos.openGraph',
        'seos.openGraph.ogImage',
        'sections',
      ],
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/academics-stories?${query}`,
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
