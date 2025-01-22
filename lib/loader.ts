'use client';

export default function strapiLoaderImg({
  src,
  width,
  quality,
}: Record<string, unknown>) {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}?w=${width}&q=${
    quality || 75
  }`;
}
