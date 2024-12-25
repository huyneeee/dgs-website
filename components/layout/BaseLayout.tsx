import Navigation from '@/components/layout/Navigation';
import Searching from '@/screens/Searching/Searching';
import { cn } from '@/lib/utils';
import { LazyMotion, domAnimation } from 'motion/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Libre_Franklin } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer } from './Footer';

const franklin = Libre_Franklin({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-libre-franklin',
});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full scroll-smooth" lang={locale}>
      <body className={cn(franklin.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider messages={messages}>
          <LazyMotion features={domAnimation}>
            <Navigation type="normal" />
            {children}
            <Searching />
            <Footer />
          </LazyMotion>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
