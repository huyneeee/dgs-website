'use client';
import MeiliSearch from 'meilisearch';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import useDebounce from './useDebounce';

const client = new MeiliSearch({
  host: process.env.NEXT_PUBLIC_MEILISEARCH_HOST || '',
  apiKey: process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY || '',
});

/*
  You need to provide indexes of collection from Strapi to search working
*/
const listIndexes = ['article'];

const useSearching = () => {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const deferredInput = useDebounce(input, 500);

  const searchParams = useSearchParams();
  const search = searchParams.get('q');

  const { data, isValidating } = useSWR(
    typeof search !== 'object' && !!deferredInput
      ? {
          key: 'search',
          args: {
            search: deferredInput,
          },
        }
      : null,
    ({ args }) =>
      client.multiSearch({
        queries: listIndexes.map(item => ({
          indexUid: item,
          q: args.search,
        })),
      }),
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
    },
  );

  useEffect(() => {
    setIsOpen(typeof search === 'string');
    setInput(search || '');
  }, [search]);

  return [
    {
      data,
      input,
      isValidating,
      isOpen,
    },
    {
      setIsOpen,
      setInput,
    },
  ] as const;
};

export default useSearching;
