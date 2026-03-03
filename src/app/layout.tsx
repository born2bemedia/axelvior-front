import localFont from 'next/font/local';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';

import { FormsPopupRenderer } from '@/features/forms';

import { cn } from '@/shared/lib/helpers/styles';
import { CookiePopup, Footer, Header, Preloader } from '@/shared/ui/components';

import 'react-toastify/dist/ReactToastify.css';
import '@/shared/lib/styles/null.scss';
import '@/shared/lib/styles/base.scss';

const cabinetGrotesk = localFont({
  variable: '--font-cabinet-grotesk',
  display: 'swap',
  src: [
    { path: './fonts/CabinetGrotesk-Thin.woff', weight: '100', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Extralight.woff', weight: '200', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Light.woff', weight: '300', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Medium.woff', weight: '500', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Bold.woff', weight: '700', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Extrabold.woff', weight: '800', style: 'normal' },
    { path: './fonts/CabinetGrotesk-Black.woff', weight: '900', style: 'normal' },
  ],
});

const clashGrotesk = localFont({
  variable: '--font-clash-grotesk',
  display: 'swap',
  src: [
    { path: './fonts/ClashGrotesk-Extralight.ttf', weight: '200', style: 'normal' },
    { path: './fonts/ClashGrotesk-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/ClashGrotesk-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/ClashGrotesk-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/ClashGrotesk-Semibold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/ClashGrotesk-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  title: 'Axelvior | Strategic Business Development for Independent Entrepreneurs',
  description:
    'Axelvior helps independent entrepreneurs gain clarity, structure, and strategic direction. We guide you to scale with confidence, making intentional decisions that lead to lasting success.',
  openGraph: {
    title: 'Axelvior | Strategic Business Development for Independent Entrepreneurs',
    description:
      'Axelvior helps independent entrepreneurs gain clarity, structure, and strategic direction. We guide you to scale with confidence, making intentional decisions that lead to lasting success.',
    images: 'https://axelvior.com/images/meta.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-7EH7P106ZY" />
      <body className={cn(cabinetGrotesk.variable, clashGrotesk.variable)}>
        <NextIntlClientProvider>
          <Preloader />
          <Header />
          {children}
          <Footer />
          <ToastContainer />
          <CookiePopup />
          <FormsPopupRenderer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
