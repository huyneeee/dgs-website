'use client';

import { Link, usePathname } from '@/i18n/routing';
import { Search } from 'lucide-react';

const SearchIcon = () => {
  const pathname = usePathname();
  return (
    <Link
      href={{
        pathname,
        query: {
          q: '',
        },
      }}
    >
      <Search />
    </Link>
  );
};

export default SearchIcon;
