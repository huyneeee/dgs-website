type Author = {
  id: number;
  documentId: string;
  name: string;
};

type Section = {
  textContent: string;
  media: Media[] | null;
  title?: string;
  contentOrder?: 'image-text' | 'text-image';
};

interface Article extends SectionContent {
  slug: string;
  cover: { url: string } | null;
  author: Author;
}

type ArticleSearching = {
  locale: Locale;
  localizations: Article[];
} & Article;
