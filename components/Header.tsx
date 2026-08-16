'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="font-display text-lg font-bold tracking-wide text-text">
          Tanatswa Stephen Nyahwema
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="border-b-2 border-primary pb-1 text-primary">Home</Link>
          <Link href="/about" className="text-textMuted hover:text-text">About</Link>
          <Link href="/projects" className="text-textMuted hover:text-text">Projects</Link>
          <Link href="/blog" className="text-textMuted hover:text-text">Blog</Link>
        </nav>

        <button
          onClick={() => setIsDark(!isDark)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary hover:bg-white/10"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
