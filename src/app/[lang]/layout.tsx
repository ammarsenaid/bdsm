import { notFound } from 'next/navigation';
import { isSupportedLang } from '@/lib/i18n/config';
import { PublicHeader } from '@/components/site/PublicHeader';
import { PublicFooter } from '@/components/site/PublicFooter';
export default async function LangLayout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params; if(!isSupportedLang(lang)) notFound(); return <><PublicHeader lang={lang}/><main className='mx-auto max-w-6xl p-4'>{children}</main><PublicFooter/></>;}
