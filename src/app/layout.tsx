import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/main.css';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Wathiq',
  description:
    'منصة واثق تساعدك على حفظ الحمولات ووصول المنتجات البترولية بشكل آمن والحد من التلاعب من خلال الربط بين شركات النقل والمحطات عبر نظام إلكتروني وأقفال ذكية تساهم في رفع الجودة والأمان.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" id="root">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q49330T3HT"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q49330T3HT');
          `}
        </Script>

        {/* Hotjar */}
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (c, s, q, u, a, r, e) {
              c.hj = c.hj || function(){(c.hj.q = c.hj.q || []).push(arguments)};
              c._hjSettings = { hjid: a };
              r = s.getElementsByTagName('head')[0];
              e = s.createElement('script');
              e.async = true;
              e.src = q + c._hjSettings.hjid + u;
              r.appendChild(e);
            })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5254855);`,
          }}
        />
      </head>

      <body className="w-full" suppressHydrationWarning={true}>
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-NT2XLMP7" />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
