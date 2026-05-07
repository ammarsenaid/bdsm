import Link from 'next/link';

export function PublicFooter() {
  return (
    <footer className='border-t border-amber-100/10 bg-black/70'>
      <div className='mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6'>
        <div className='text-right'>
          <p className='text-xl font-bold text-amber-300'>مجلس نوار</p>
          <p className='mt-3 text-sm leading-7 text-zinc-400'>مجتمع عربي خاص للبالغين يضع الأمان، الخصوصية، والاحترام في مقدمة التجربة.</p>
        </div>
        <div className='text-right'>
          <p className='mb-3 font-semibold text-zinc-100'>روابط مهمة</p>
          <div className='space-y-2 text-sm text-zinc-400'>
            <Link href='/ar/community' className='block hover:text-amber-300'>المجتمع</Link>
            <Link href='/ar/forums' className='block hover:text-amber-300'>المنتديات</Link>
            <Link href='/ar/blog' className='block hover:text-amber-300'>المقالات</Link>
          </div>
        </div>
        <div className='text-right'>
          <p className='mb-3 font-semibold text-zinc-100'>قانوني</p>
          <div className='space-y-2 text-sm text-zinc-400'>
            <Link href='/ar/privacy' className='block hover:text-amber-300'>الخصوصية</Link>
            <Link href='/ar/safety' className='block hover:text-amber-300'>الأمان</Link>
            <Link href='/ar/rules' className='block hover:text-amber-300'>القواعد</Link>
          </div>
        </div>
      </div>
      <div className='border-t border-amber-100/10 py-4 text-center text-xs text-zinc-500'>© {new Date().getFullYear()} Majlis Noir — جميع الحقوق محفوظة.</div>
    </footer>
  );
}
