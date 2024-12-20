'use server';

export async function generateMetadataFromData(seos: SEO | null, favicon?: Media) {
  if (!seos) return;
  const urlImages =
    process.env.NEXT_PUBLIC_LANDING_URL + '/images/meta/opengraph-image.png';

  const ogImage = `${process.env.NEXT_PUBLIC_STRAPI_URL}${seos.openGraph?.ogImage?.url}`;
  const faviconImage = `${process.env.NEXT_PUBLIC_STRAPI_URL}${favicon?.url}`;

  return {
    title: seos.metaTitle,
    description: seos.metaDescription,
    metadataBase: new URL(process.env.NEXT_PUBLIC_LANDING_URL || ''),
    openGraph: {
      title: seos.openGraph?.ogTitle,
      description: seos.openGraph?.ogDescription,
      images: seos.openGraph?.ogImage ? ogImage : urlImages,
      type: 'website',
    },
    twitter: {
      title: seos.openGraph?.ogTitle,
      description: seos.openGraph?.ogDescription,
      images: seos.openGraph?.ogImage ? ogImage : urlImages,
    },
    icons: {
      icon: favicon ? faviconImage : '/images/meta/favicon.png',
    },
  };
}
