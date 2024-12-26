import { useTranslations } from 'next-intl';

const PrivacyPolicy = () => {
  const t = useTranslations();

  return (
    <main className="bg-[#fafafa] flex flex-col w-full container xl:pb-20 pb-10 divide-y-[1px] divide-black">
      <h3 className="heading-2 my-3 lg:my-5 ">{t('PrivacyPolicy.title')}</h3>

      <div className="flex flex-col divide-y-[1px] divide-black">
        <section className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-6">
          <h5 className="heading-5 font-[400] w-full md:w-1/2 text-[35px] md-[42px]">
            {t('PrivacyPolicy.policy-1')}
          </h5>
          <p className="leading-7 w-full md:w-1/2 text-[16px] md:text-[19px] font-[400]">
            {t('PrivacyPolicy.policy-1-content')}
          </p>
        </section>

        <section className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-6">
          <h5 className="heading-5 font-[400] w-full md:w-1/2 text-[35px] md-[42px]">
            {t('PrivacyPolicy.policy-2')}
          </h5>
          <p className="leading-7 w-full md:w-1/2 text-[16px] md:text-[19px] font-[400]">
            {t('PrivacyPolicy.policy-2-content')}
          </p>
        </section>

        <section className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-6">
          <h5 className="heading-5 font-[400] w-full md:w-1/2 text-[35px] md-[42px]">
            {t('PrivacyPolicy.policy-3')}
          </h5>
          <p className="leading-7 w-full md:w-1/2 text-[16px] md:text-[19px] font-[400]">
            {t('PrivacyPolicy.policy-3-content')}
          </p>
        </section>

        <section className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-6">
          <h5 className="heading-5 font-[400] w-full md:w-1/2 text-[35px] md-[42px]">
            {t('PrivacyPolicy.policy-4')}
          </h5>
          <p className="leading-7 w-full md:w-1/2 text-[16px] md:text-[19px] font-[400]">
            {t('PrivacyPolicy.policy-4-content')}
          </p>
        </section>

        <section className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-6">
          <h5 className="heading-5 font-[400] w-full md:w-1/2 text-[35px] md-[42px]">
            {t('PrivacyPolicy.policy-5')}
          </h5>
          <p className="leading-7 w-full md:w-1/2 text-[16px] md:text-[19px] font-[400]">
            {t('PrivacyPolicy.policy-5-content')}
          </p>
        </section>

        <section className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-6">
          <h5 className="heading-5 font-[400] w-full md:w-1/2 text-[35px] md-[42px]">
            {t('PrivacyPolicy.policy-6')}
          </h5>
          <p className="leading-7 w-full md:w-1/2 text-[16px] md:text-[19px] font-[400]">
            {t('PrivacyPolicy.policy-6-content')}
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
