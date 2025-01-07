import { REVALIDATE_KEYS, STRAPI_MODEL } from '@/configs/revalidate-keys';
import { revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

function getTagsRevalidate(model: STRAPI_MODEL) {
  if (model === STRAPI_MODEL.Articles) return REVALIDATE_KEYS.articles;
  if (model === STRAPI_MODEL.Global) return REVALIDATE_KEYS.global;
  if (model === STRAPI_MODEL.Teammember) return REVALIDATE_KEYS.teammember;
  if (model === STRAPI_MODEL.ClubAndActivity)
    return REVALIDATE_KEYS['club-and-activity'];
  if (model === STRAPI_MODEL.Job) return REVALIDATE_KEYS.jobs;
  if (model === STRAPI_MODEL.Advisory) return REVALIDATE_KEYS.advisory;
  if (model === STRAPI_MODEL.Admission) return REVALIDATE_KEYS.admission;
  if (model === STRAPI_MODEL.ExperientialEducation)
    return REVALIDATE_KEYS['experiential-education'];
  if (model === STRAPI_MODEL.Banner) return REVALIDATE_KEYS.banners;
  if (model === STRAPI_MODEL.Library) return REVALIDATE_KEYS.library;
  if (model === STRAPI_MODEL.Policy) return REVALIDATE_KEYS.policy;
  if (model === STRAPI_MODEL.TheDeltasPage)
    return REVALIDATE_KEYS['the-deltas-page'];
  if (model === STRAPI_MODEL.MissionAndVision)
    return REVALIDATE_KEYS['mission-and-vision'];
  if (model === STRAPI_MODEL.DgsHistory) return REVALIDATE_KEYS['dgs-history'];
  if (model === STRAPI_MODEL.AcademicsMiddleSchool)
    return REVALIDATE_KEYS['academics-middle-school'];
  if (model === STRAPI_MODEL.AcademicsHighSchool)
    return REVALIDATE_KEYS['academics-high-school'];
  if (model === STRAPI_MODEL.AcademicsCollegeCounseling)
    return REVALIDATE_KEYS['academics-college-counseling'];

  if (model === STRAPI_MODEL.AboutOurTeam)
    return REVALIDATE_KEYS['about-our-team'];
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
