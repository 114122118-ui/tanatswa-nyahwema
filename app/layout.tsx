import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import AIAssistant from '@/components/AIAssistant';

export const metadata: Metadata = {
  title: 'Tanatswa Stephen Nyahwema | AI Portfolio',
  description: 'AI researcher and developer exploring LLMs, LoRA, and cross-cultural technology from Zimbabwe to Taiwan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-text antialiased">
        <Header />
        {children}
        <AIAssistant />
        <footer className="border-t border-white/10 bg-surface/60">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-textMuted md:flex-row md:items-center md:justify-between md:px-10">
            <p>© 2026 AI Portfolio. From Zimbabwe to Taiwan.</p>
            <div className="flex gap-5">
              <a href="mailto:nyahwematanatswa82@gmail.com" className="hover:text-primary">Email</a>
              <a href="https://instagram.com/tanatswastevynyahwema" className="hover:text-primary" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com" className="hover:text-primary" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
