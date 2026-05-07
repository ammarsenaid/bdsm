import Link from 'next/link';
import { ShieldCheck, Gem, LockKeyhole, Users, BookOpenText, CalendarCheck2, Crown, Eye, Mars, Venus, VenusAndMars, ArrowLeft, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'خصوصيتك أولاً', desc: 'حماية متعددة لهويتك ومعلوماتك مع خيارات إخفاء متقدمة.' },
  { icon: Gem, title: 'أعضاء حقيقيون', desc: 'مراجعة دقيقة للحسابات لضمان بيئة موثوقة وراقية.' },
  { icon: LockKeyhole, title: 'محادثات آمنة', desc: 'قنوات تواصل آمنة ومشفرة مع ضوابط موافقة واضحة.' },
  { icon: Users, title: 'مجتمع راقٍ', desc: 'أعضاء يشاركونك القيم: الاحترام، التوافق، والنضج.' },
  { icon: BookOpenText, title: 'تعليم وتوعية', desc: 'مقالات ودروس متوازنة حول العلاقات والحدود النفسية.' },
  { icon: CalendarCheck2, title: 'أحداث حصرية', desc: 'لقاءات رقمية وخاصة بإشراف يضمن الأمان والخصوصية.' },
];

const audience = [
  { icon: Crown, title: 'مهيمنات', desc: 'مساحة ثقة للقيادة الواعية وبناء علاقات متوافقة.' },
  { icon: Venus, title: 'خاضعون', desc: 'بيئة محترمة للتعبير الآمن عن الرغبات والحدود.' },
  { icon: VenusAndMars, title: 'سويتش', desc: 'لمن يتنقل بين الأدوار بوضوح وتفاهم متبادل.' },
  { icon: Eye, title: 'مراقبون', desc: 'للمهتمين بالتعلم والمشاهدة ضمن قواعد المجتمع.' },
];

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className='relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden'>
      <section className='relative isolate border-b border-amber-200/10 bg-[#08090c]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(183,136,61,.25),transparent_35%),radial-gradient(circle_at_70%_0%,rgba(255,255,255,.08),transparent_35%)]' />
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-2 lg:items-center lg:py-20'>
          <div className='space-y-6 text-right'>
            <span className='inline-flex rounded-full border border-amber-300/25 bg-black/40 px-4 py-2 text-sm text-amber-200'>مجتمع خاص للبالغين فقط +18</span>
            <h1 className='text-4xl font-black leading-tight text-amber-50 md:text-6xl'>
              مساحتك الآمنة.<br />
              <span className='text-amber-300'>شغفك. سيطرتك.</span>
            </h1>
            <p className='max-w-xl text-lg leading-8 text-zinc-300'>مجتمع عربي راقٍ يجمع بين الهيمنة والخضوع في بيئة آمنة، سرية، ومبنية على الاحترام والتوافق والتفاهم.</p>
            <div className='flex flex-wrap justify-end gap-3'>
              <Link href={`/${lang}/register`} className='inline-flex items-center gap-2 rounded-xl bg-amber-300 px-7 py-3 font-semibold text-black transition hover:bg-amber-200'>انضم الآن <ArrowLeft size={16} /></Link>
              <Link href={`/${lang}/community`} className='rounded-xl border border-amber-200/20 bg-black/25 px-7 py-3 font-semibold text-zinc-100 transition hover:border-amber-300/45'>تعرف على المجتمع</Link>
            </div>
            <div className='flex flex-wrap justify-end gap-5 text-sm text-zinc-300'>
              {['بيئة آمنة ومشفرة', 'أعضاء موثوقون', 'خصوصية واستقلالية'].map((t) => <span key={t} className='inline-flex items-center gap-1'><CheckCircle2 className='text-amber-300' size={16} />{t}</span>)}
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -inset-6 rounded-[2rem] bg-amber-300/10 blur-2xl' />
            <div className='relative overflow-hidden rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-zinc-900 to-black p-2 shadow-[0_10px_60px_rgba(0,0,0,.6)]'>
              <div className='h-[480px] rounded-[1.5rem] border border-amber-200/10 bg-[radial-gradient(circle_at_70%_10%,rgba(210,161,85,.25),transparent_35%),linear-gradient(120deg,#111318,#090a0d)] p-8'>
                <div className='flex h-full items-end rounded-2xl border border-amber-100/10 bg-[linear-gradient(to_top,rgba(0,0,0,.8),rgba(0,0,0,.2))] p-6'>
                  <p className='text-sm leading-7 text-zinc-300'>تصميم بصري راقٍ يعبّر عن الخصوصية، الغموض، والتميّز دون أي محتوى صريح.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-y border-amber-200/10 bg-black/60'>
        <div className='mx-auto flex max-w-7xl flex-wrap justify-center gap-6 px-4 py-4 text-sm text-zinc-300 md:px-6'>
          {['خصوصية أولاً', 'التوافق أساس المجتمع', '+18 فقط', 'بيئة آمنة', 'إشراف ومراجعة', 'رسائل بطلب موافقة'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-16 md:px-6'>
        <h2 className='mb-8 text-center text-4xl font-bold'>لماذا مجلس نوار؟</h2>
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {features.map((item) => {
            const Icon = item.icon;
            return <article key={item.title} className='rounded-2xl border border-amber-200/15 bg-[linear-gradient(145deg,rgba(255,255,255,.03),rgba(255,255,255,.01))] p-6 shadow-xl transition hover:-translate-y-1 hover:border-amber-300/30'><Icon className='mb-4 text-amber-300' /><h3 className='mb-2 text-2xl font-semibold'>{item.title}</h3><p className='leading-7 text-zinc-300'>{item.desc}</p></article>;
          })}
        </div>
      </section>

      <section className='border-y border-amber-200/10 bg-[linear-gradient(180deg,#0a0b0f,#07080b)]'>
        <div className='mx-auto max-w-7xl px-4 py-16 text-center md:px-6'>
          <h2 className='mb-10 text-4xl font-bold'>مجتمعنا في أرقام</h2>
          <div className='grid gap-6 md:grid-cols-5'>
            {[
              ['12K+', 'عضو نشط'], ['2K+', 'مهيمنة'], ['10K+', 'خاضع'], ['50+', 'دولة عربية'], ['24/7', 'دعم ومراقبة'],
            ].map(([n, l]) => <div key={n} className='rounded-2xl border border-amber-200/15 bg-black/30 p-6'><p className='text-5xl font-semibold text-amber-300'>{n}</p><p className='mt-2 text-zinc-300'>{l}</p></div>)}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-4 py-16 md:px-6'>
        <h2 className='mb-8 text-center text-4xl font-bold'>لمن هذا المجتمع؟</h2>
        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {audience.map((item) => {
            const Icon = item.icon;
            return <article key={item.title} className='rounded-2xl border border-amber-200/15 bg-zinc-900/55 p-5 text-right'><Icon className='mb-4 text-amber-300' /><h3 className='text-2xl font-semibold'>{item.title}</h3><p className='mt-2 text-zinc-300'>{item.desc}</p></article>;
          })}
        </div>
      </section>

      <section className='border-y border-amber-200/10 bg-black/60'>
        <div className='mx-auto max-w-4xl px-4 py-16 text-center md:px-6'>
          <h2 className='text-4xl font-bold'>الاحترام. التوافق. الأمان.</h2>
          <p className='mt-4 text-lg leading-8 text-zinc-300'>نحن نؤمن أن أي علاقة حقيقية تُبنى على التوافق والحدود الواضحة والاحترام المتبادل. اقرأ قواعد مجتمعنا قبل الانضمام.</p>
          <Link href={`/${lang}/rules`} className='mt-7 inline-flex rounded-xl border border-amber-200/20 px-7 py-3 font-semibold text-amber-100 transition hover:border-amber-300/50'>اطلع على قواعد المجتمع</Link>
        </div>
      </section>

      <section className='mx-auto max-w-5xl px-4 py-16 text-center md:px-6'>
        <h2 className='text-4xl font-bold'>جاهز لتكتشف عالمك الحقيقي؟</h2>
        <p className='mt-4 text-lg text-zinc-300'>انضم إلى مجتمع عربي خاص حيث يمكنك أن تكون على طبيعتك دون خوف.</p>
        <Link href={`/${lang}/register`} className='mt-7 inline-flex items-center gap-2 rounded-xl bg-amber-300 px-8 py-3 font-semibold text-black transition hover:bg-amber-200'>انضم الآن <Mars size={16} /></Link>
        <p className='mt-3 text-sm text-amber-100/85'>عضوية سرية وآمنة</p>
      </section>
    </div>
  );
}
