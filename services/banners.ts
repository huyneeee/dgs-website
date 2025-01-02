import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import dayjs from 'dayjs';
import qs from 'qs';

const getBanners = async () => {
  const query = qs.stringify(
    {
      populate: '*',
      filters: {
        effectiveFrom: {
          $lte: dayjs().format('YYYY-MM-DD'),
        },
        effectiveTo: {
          $gte: dayjs().format('YYYY-MM-DD'),
        },
      },
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/banners?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.banners],
      },
      cache: 'force-cache',
    },
  );
  const data = await res.json();
  return data as ResponseStrapi<Banner[]>;
};

export const bannerAPI = Object.freeze({
  getBanners,
});
