import { Inter, Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lusitana'
});

const inter = Inter({
  subsets: ['latin']
});

export { inter, lusitana };
