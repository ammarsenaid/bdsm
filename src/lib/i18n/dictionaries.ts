import type { AppLang } from './config';
export const dictionaries: Record<AppLang, any> = {
  ar: { brand: 'مجلس نوار', nav: ['الرئيسية','المجتمع','المنتديات','المقالات','الأمان','القواعد'], heroTitle:'مجتمع عربي خاص للبالغين فقط', heroSubtitle:'مساحة راقية وآمنة للتواصل والنقاش وبناء الثقة بين البالغين المتوافقين، مع احترام الخصوصية والحدود الشخصية.' },
  en: { brand: 'Majlis Noir', nav: ['Home','Community','Forums','Blog','Safety','Rules'], heroTitle:'Private Arabic-first adults-only community', heroSubtitle:'A respectful space for trust, privacy, and consent-first discussion.' }
};
