import './globals.css';
import { Baloo_2, Inter } from 'next/font/google';

const baloo = Baloo_2({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Dadaou Baby | Infantil Premium & Cinematográfico',
  description: 'Experiência única em produtos infantis premium. 20+ anos de história e confiança.',
};

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating/WhatsAppFloating';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
