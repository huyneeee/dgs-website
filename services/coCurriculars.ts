import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getActivitiesPage = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: {
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/club-and-activity?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS['club-and-activity']],
      },
    },
  );

  // if (!res.ok) {
  //   throw new Error(`Response status: ${res.status}`);
  // }

  const data = await res.json();
  return data as ResponseStrapi<ClubAndActivity>;
};

const getAdvisoryPage = async (locale: string) => {
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advisory?${query}`,
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
  return data as ResponseStrapi<ClubAndActivity>;
};

const getExpEducationPage = async (locale: string) => {
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/experiential-education?${query}`,
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
  return data as ResponseStrapi<ClubAndActivity>;
};

export const coCurruculars = Object.freeze({
  getActivitiesPage,
  getAdvisoryPage,
  getExpEducationPage,
});
