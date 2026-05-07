import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Majlis Noir Admin',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <main><h1>Admin Area</h1></main>;
}
