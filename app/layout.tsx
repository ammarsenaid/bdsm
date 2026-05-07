import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Majlis Noir',
  description: 'Privacy-first 18+ community platform',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
