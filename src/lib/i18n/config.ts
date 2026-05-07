export const supportedLangs = ['ar', 'en'] as const;
export type AppLang = (typeof supportedLangs)[number];
export const defaultLang: AppLang = 'ar';
export const isSupportedLang = (lang: string): lang is AppLang => supportedLangs.includes(lang as AppLang);
