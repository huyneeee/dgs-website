import { REVALIDATE_KEYS, STRAPI_MODEL } from '@/configs/revalidate-keys';
import { revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

function getTagsRevalidate(model: STRAPI_MODEL) {
  if (model === STRAPI_MODEL.Articles) return REVALIDATE_KEYS.articles;
  if (model === STRAPI_MODEL.Global) return REVALIDATE_KEYS.global;
  if (model === STRAPI_MODEL.Teammember) return REVALIDATE_KEYS.teammember;
  if (model === STRAPI_MODEL.ClubAndActivity)
    return REVALIDATE_KEYS['club-and-activity'];
  if (model === STRAPI_MODEL.AcademicsStory)
    return REVALIDATE_KEYS['academics-story'];
  if (model === STRAPI_MODEL.Job) return REVALIDATE_KEYS.jobs;
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get('secret');

  if (secret !== process.env.WEBHOOK_TOKEN) {
    return Response.json('Invalid token', {
      status: 401,
    });
  }

  try {
    const body = await request.json();
    const { entry, model } = body;
    const tags = getTagsRevalidate(model);

    if (!entry || !model || !tags) {
      return Response.json({
        revalidated: false,
        now: Date.now(),
        message: 'Missing path to revalidate',
      });
    }

    revalidateTag(tags);
    return Response.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.log('error', error);
  }
}
