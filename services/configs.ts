import qs from 'qs';

export const getQuery = (locale: string) =>
  qs.stringify(
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
