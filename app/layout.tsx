import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/sonner';
import { SpeedInsights } from '@vercel/speed-insights/next'; // 1. Import component

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Nghiên Cứu Huyền Học - Trí Tuệ Cổ Xưa & Tri Thức Nội Môn',
  description: 'Khám phá những bí ẩn của Kinh Dịch và Thần Số Học thông qua các công cụ tương tác và hướng dẫn toàn diện.',
  keywords: 'Kinh Dịch, thần số học, âm lịch, trí tuệ cổ xưa, bói toán, huyền học, tâm linh',
  authors: [{ name: 'Nghiên Cứu Huyền Học' }],
  openGraph: {
    title: 'Nghiên Cứu Huyền Học - Trí Tuệ Cổ Xưa & Tri Thức Nội Môn',
    description: 'Khám phá bí ẩn của Kinh Dịch và Thần Số Học qua các công cụ tương tác.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative min-h-screen flex flex-col cosmic-background">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights /> {/* 2. Thêm component vào cuối body */}
      </body>
    </html>
  );
}