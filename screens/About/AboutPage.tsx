import { TabContent } from '@/components/layout/TabContent';
import { tabs } from '@/configs/tabs';
import React from 'react';

const AboutPage = () => {
  return (
    <main className="flex flex-col w-full container xl:pb-40">
      <h1 className="heading-1 my-5">About</h1>
      <TabContent data={tabs.about!} translationKey="about" />
    </main>
  );
};

export default AboutPage;
