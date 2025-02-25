import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ISF Global AI Summit 2025 | Future of AI & Leadership',
  description:
    'Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology.',
  keywords:
    'AI Summit 2025, Artificial Intelligence Conference, AI Leadership, Future of AI, AI Strategy, Tech Conference, Machine Learning, Deep Learning, ISF AI Summit',
  author: 'ISF Global',
  openGraph: {
    title: 'ISF Global AI Summit 2025 | Future of AI & Leadership',
    description:
      'Join top AI leaders, innovators, and strategists at the ISF Global AI Summit 2025 in Austin, Texas. Explore the future of artificial intelligence, leadership, and cutting-edge technology.',
    type: 'website',
    url: 'https://globalaisummit.isfnetwork.org/',
    images: [
      {
        url: '/ai-summit-og.png', 
        width: 1200,
        height: 630,
        alt: 'ISF Global AI Summit 2025 Banner',
      },
    ],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://globalaisummit.isfnetwork.org/" />
        <link rel="icon" href="/isf-favicon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
