import FadeInBox from '@/components/ui/fadein-box';
import Image from 'next/image';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container xl:py-10 py-6">
      <FadeInBox>
        <div className="xl:rounded-3xl xl:p-24 sm:p-16 sm:rounded-2xl p-8 rounded-lg relative overflow-hidden">
          <Image
            src="/images/backgrounds/testimonials.jpg"
            alt="bg-img"
            fill
            className="object-cover brightness-50 z-0"
            sizes="50vw"
          />

          <h2 className="xl:text-3xl sm:text-2xl text-xl font-normal text-white xl:leading-relaxed sm:leading-relaxed leading-relaxed relative z-[1] italic">
            “ DGS is an extraordinary place relentlessly committed to helping
            students achieve the confidence, competence, and commitment to make
            the world a better place. We know that when your community supports
            you, you are able to excel at levels beyond what you could imagine
            for yourself. ”
          </h2>
          <p className="text-white text-xs sm:text-base sm:mt-10 mt-6 relative z-[1]">
            Judith Black
          </p>
          <p className="text-white/70 text-xs sm:text-base relative z-[1]">
            CEO of Workcation
          </p>
        </div>
      </FadeInBox>
    </section>
  );
};
