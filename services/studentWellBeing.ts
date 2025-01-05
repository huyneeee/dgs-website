import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getStudentWellBeing = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: {
        mainHero: {
          populate: {
            image: {
              fields: 'url',
            },
          },
        },
        sections: {
          populate: {
            media: {
              populate: {
                file: {
                  fields: 'url',
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/student-well-being?${query}`,
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
  return data as ResponseStrapi<ClubAndActivity>;
};

export const studentWellBeing = Object.freeze({
  getStudentWellBeing,
});
