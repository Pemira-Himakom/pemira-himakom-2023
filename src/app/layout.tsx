import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
// eslint-disable-next-line camelcase
import { Cinzel_Decorative } from 'next/font/google';
import NIMProvider from '@/context/NIMContext';
import AdminAuthProvider from '@/context/AdminAuthContext';

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel-decorative',
});

const ppMori = localFont({
  src: [
    {
      path: '../../public/fonts/PPMori-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPMori-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-pp-mori',
});

export const metadata: Metadata = {
  title: 'Pemira 2023',
  description: 'Held by Himakom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <AdminAuthProvider>
        <NIMProvider>
          <body
            className={`${cinzelDecorative.variable} ${cinzelDecorative.className} ${ppMori.variable} font-sans`}
          >
            {children}
          </body>
        </NIMProvider>
      </AdminAuthProvider>
    </html>
  );
}
