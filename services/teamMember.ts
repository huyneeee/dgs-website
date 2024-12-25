const getTeamMembers = async (locale: string) => {
  const query = qs.stringify(
    {
      locale,
      pagination: {
        start: 0,
        limit,
      },
      populate: ['cover'],
    },
    {
      encodeValuesOnly: true,
      skipNulls: true,
    },
  );
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?${query}`,
    {
      next: {
        tags: [REVALIDATE_KEYS.articles],
      },
      cache: 'force-cache',
    },
  );
  const data = await res.json();
  return data as ResponseStrapi<Article[]>;
};
