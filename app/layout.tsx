import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Mystic Studies - Ancient Wisdom & Esoteric Knowledge',
  description: 'Explore the mysteries of Kinh Dịch, Gematria, Tarot, and ancient wisdom traditions. Interactive tools for divination and spiritual insight.',
  keywords: 'Kinh Dịch, Gematria, Tarot, occult, esoteric, divination, mysticism, spirituality',
  authors: [{ name: 'Mystic Studies' }],
  openGraph: {
    title: 'Mystic Studies - Ancient Wisdom & Esoteric Knowledge',
    description: 'Explore the mysteries of Kinh Dịch, Gematria, Tarot, and ancient wisdom traditions.',
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
      </body>
    </html>
  );
}