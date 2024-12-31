type Author = {
  id: number;
  documentId: string;
  name: string;
};

type Section = {
  textContent: string;
  media: Media[] | null;
  title?: string;
};

type Article = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  locale: 'vi';
  cover: { url: string } | null;
  author: Author;
  sections: Section[];
  seos: SEO | null;
  mainHero: {
    image: { url: string };
    description: string;
  };
};
