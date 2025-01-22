'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      {t.rich('description', {
        p: chunks => <p className="mt-4">{chunks}</p>,
        retry: chunks => <Button onClick={reset}>{chunks}</Button>,
      })}
    </div>
  );
}
