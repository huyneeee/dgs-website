import { useTranslations } from 'next-intl';

const SchoolCalendar = () => {
  const t = useTranslations('SchoolCalendar');
  return (
    <main className="container pb-10">
      <h1 className="heading-2 text-foreground mb-10">{t('title')}</h1>
      <div className="w-full h-svh">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FHo_Chi_Minh&showPrint=0&title=DGS%20School&src=bnFoLm9uZS5vZi5hLmtpbmRAZ21haWwuY29t&src=YWMwYjhmY2Y1YWMxNmQzOGZkM2FiM2U1NTIxNWUxNTM2NDRiYTc0OTdiZDFmZjJiODYyM2M0YmZmMzUzNTJjNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=dmkudmlldG5hbWVzZSNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23B39DDB&color=%230B8043"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </main>
  );
};

export default SchoolCalendar;
