type Author = {
  id: number;
  documentId: string;
  name: string;
};

type Section = {
  description: string;
  media: Media | null;
};

type Article = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  locale: 'vi';
  cover: Media | null;
  author: Author;
  sections: Section[];
  seos: SEO | null;
};
