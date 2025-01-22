export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const title = params.locale === 'en' ? 'School Calendar' : 'Lịch năm học';
  return {
    title: `${title} | Delta Global School`,
  };
}

export { default } from '@/screens/Resources/SchoolCalendar';
