interface Academics {
  id: number;
  title: string;
  locale: string;
  description: string;
  slug: string;
  type: 'middle-school' | 'high-school' | 'college-counseling';
  sections: Section[];
  mainHero: {
    image: { url: string };
    description: string;
  };
}
