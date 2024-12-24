import { paths } from '@/app/router';
import { STRAPI_MODEL } from './revalidate-keys';

/*
  Mapping page path with response searching to redirect correct page has keywords
*/

export const SEARCHING_PAGE_PATH = {
  [STRAPI_MODEL.Articles]: paths.about,
};
