import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Majlis Noir App',
  robots: { index: false, follow: false },
};

export default function AppPage() {
  return <main><h1>Application Area</h1></main>;
}
