import { Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto', // Creates a CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${roboto.variable} ${roboto.className}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}