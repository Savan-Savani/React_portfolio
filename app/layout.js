import './css/globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Savan Portfolio',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id='G-3LJTTGTYEN'
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3LJTTGTYEN"
        />
        <Script id='G-3LJTTGTYEN' strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3LJTTGTYEN');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  );
}
