'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '', label: 'الرئيسية' },
  { href: '/community', label: 'المجتمع' },
  { href: '/forums', label: 'المنتديات' },
  { href: '/blog', label: 'المقالات' },
  { href: '/safety', label: 'الأمان' },
  { href: '/rules', label: 'القواعد' },
];

export function PublicHeader({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-amber-200/15 bg-black/75 backdrop-blur-xl'>
      <nav className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <div className='hidden items-center gap-2 md:flex'>
          <Link href={`/${lang}/login`} className='rounded-xl border border-amber-200/25 px-4 py-2 text-sm text-amber-50 transition hover:border-amber-300/55'>تسجيل الدخول</Link>
          <Link href={`/${lang}/register`} className='rounded-xl bg-amber-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-200'>إنشاء حساب</Link>
        </div>

        <div className='hidden items-center gap-7 text-sm text-zinc-200 md:flex'>
          {navItems.map((item) => (
            <Link key={item.label} href={`/${lang}${item.href}`} className='transition hover:text-amber-300'>
              {item.label}
            </Link>
          ))}
        </div>

        <Link href={`/${lang}`} className='group text-right'>
          <p className='text-lg font-bold tracking-wide text-amber-300'>مجلس نوار</p>
          <p className='text-xs uppercase tracking-[0.22em] text-zinc-400 group-hover:text-zinc-300'>Majlis Noir</p>
        </Link>

        <button aria-label='فتح القائمة' onClick={() => setOpen(!open)} className='rounded-lg border border-amber-200/20 p-2 text-amber-100 md:hidden'>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className='border-t border-amber-200/10 bg-black/95 px-4 py-4 md:hidden'>
          <div className='flex flex-col gap-3 text-sm'>
            {navItems.map((item) => (
              <Link key={item.label} href={`/${lang}${item.href}`} onClick={() => setOpen(false)} className='rounded-lg px-2 py-2 text-zinc-100 hover:bg-zinc-900'>
                {item.label}
              </Link>
            ))}
            <div className='mt-2 grid grid-cols-2 gap-2'>
              <Link href={`/${lang}/login`} className='rounded-lg border border-amber-200/20 px-3 py-2 text-center'>تسجيل الدخول</Link>
              <Link href={`/${lang}/register`} className='rounded-lg bg-amber-300 px-3 py-2 text-center font-semibold text-black'>إنشاء حساب</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
