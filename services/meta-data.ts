import { REVALIDATE_KEYS } from '@/configs/revalidate-keys';
import qs from 'qs';

const getMetaDataSite = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      populate: ['seos', 'seos.openGraph', 'seos.openGraph.ogImage', 'favicon'],
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    }
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/global?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.global],
      },
      cache: 'force-cache',
    }
  );
  const data = await res.json();
  return data as ResponseStrapi<MetaData>;
};

export const metaDataAPI = Object.freeze({
  getMetaDataSite,
});
