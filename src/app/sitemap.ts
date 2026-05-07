import type { MetadataRoute } from 'next';
const base='http://localhost:3000';
export default function sitemap(): MetadataRoute.Sitemap { const paths=['','about','community','forums','blog','guides','safety','privacy','rules','faq','contact']; return ['ar','en'].flatMap((l)=>paths.map((p)=>({url:`${base}/${l}${p?`/${p}`:''}`}))); }
