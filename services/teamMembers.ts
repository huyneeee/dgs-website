import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getTeamMembers = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: {
        avatar: {
          fields: ['url'],
        },
      },
      sort: ['order'],
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/teammembers?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.teammember],
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Response status: ${res.status}`);
  }

  const data = await res.json();
  return data as ResponseStrapi<TeamMember[]>;
};

export const teamMemberAPI = Object.freeze({
  getTeamMembers,
});
