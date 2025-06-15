import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gemstone Selection',
  description: 'Select gemstone shapes and explore options.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-fancy">{children}</body>
    </html>
  );
}
