type Locale = 'en' | 'vi';

type ResponseStrapi<T> = {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type MediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type Media = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  url: string;
  formats: {
    thumbnail: MediaFormat;
    small: MediaFormat;
    medium: MediaFormat;
  };
};

type OpenGraph = {
  id: number;
  ogTitle: string;
  ogDescription: string;
  ogUrl: null | string;
  ogType: null | string;
  ogImage: null | Media;
};

type SEO = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: null | string;
  metaRobots: null | string;
  metaViewport: null | string;
  canonicalURL: null | string;
  structuredData: null | string;
  openGraph: OpenGraph | null;
};
