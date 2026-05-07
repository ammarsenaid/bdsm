import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('http://localhost:3000'), title:{default:'Majlis Noir | مجلس نوار',template:'%s | Majlis Noir'}, description:'Privacy-first, consent-first adults-only Arabic community.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang='ar' dir='rtl'><body>{children}</body></html>; }
