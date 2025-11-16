import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HENINTSOA Hasimanitriniaina Jonica | Développeur FullStack',
  description: 'Portfolio professionnel de HENINTSOA Hasimanitriniaina Jonica, développeur FullStack spécialisé en React, Next.js, TypeScript et développement web moderne.',
  keywords: ['développeur web', 'fullstack', 'react', 'nextjs', 'typescript', 'madagascar', 'fianarantsoa'],
  authors: [{ name: 'HENINTSOA Hasimanitriniaina Jonica' }],
  openGraph: {
    title: 'HENINTSOA Hasimanitriniaina Jonica | Développeur FullStack',
    description: 'Portfolio professionnel - Développeur FullStack',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
