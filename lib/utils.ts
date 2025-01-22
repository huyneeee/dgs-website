import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageLink(url: string) {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}
