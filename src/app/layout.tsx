
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../style/main.css';


export const metadata: Metadata = {
  title: 'Wathiq',
  description: 'منصة واثق تساعدك على حفظ الحمولات ووصول المنتجات البترولية بشكل آمن والحد من التلاعب من خلال الربط بين شركات النقل والمحطات عبر نظام إلكتروني وأقفال ذكية تساهم في رفع الجودة والأمان.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir ='rtl' id='root'>
      <body className="w-full" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
