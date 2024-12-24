import { TabContent } from "@/components/layout/TabContent";
import { tabs } from "@/configs/tabs";

const AcademicsPage = () => {
  return (
    <main className="flex flex-col w-full container xl:pb-40">
      <h1 className="heading-1 my-5">AcademicsPage</h1>
      <TabContent data={tabs.academics!} translationKey="academics" />
    </main>
  );
};

export default AcademicsPage;
