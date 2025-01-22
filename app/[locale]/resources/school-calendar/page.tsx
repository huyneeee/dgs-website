export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const title = locale === 'en' ? 'School Calendar' : 'Lịch năm học';
  return {
    title: `${title} | Delta Global School`,
  };
}

export { default } from '@/screens/Resources/SchoolCalendar';
