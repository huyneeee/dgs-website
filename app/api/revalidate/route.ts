// import { STRAPI_MODEL } from '@/configs/revalidate-keys';
// import { revalidatePath } from 'next/cache';
// import type { NextRequest } from 'next/server';

// function getPageRoute(strapiModel: STRAPI_MODEL, slug: string) {}

// export async function POST(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const secret = searchParams.get('secret')

//   if (secret !== process.env.WEBHOOK_TOKEN) {
//     return Response.json('Invalid token', {
//       status: 401,
//     });
//   }

//   console.log('headers', request.body)
//   try {
//     const { entry, model } = request.body;

//     if (!entry || !model)
//       return Response.json({
//         revalidated: false,
//         now: Date.now(),
//         message: 'Missing path to revalidate',
//       });

//     const { slug } = entry;

//     // revalidatePath(path)
//     return Response.json({ revalidated: true, now: Date.now() });
//   } catch (error) {
//     console.log('error', error);
//   }
// }
