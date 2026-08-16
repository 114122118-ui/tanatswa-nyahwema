export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-secondary">
              <span className="h-2 w-2 rounded-full bg-secondary"></span>
              Tzu Chi University • TCU
            </div>

            <h1 className="font-display text-5xl leading-tight md:text-7xl">
              Bridging Borders<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">through AI.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-textMuted">
              Zimbabwean-born technologist and AI researcher studying in Taiwan, building custom LLMs, intelligent agents, and human-centered technology that connects cultures.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/projects" className="rounded-lg bg-primary px-6 py-3 font-semibold text-[#25005a] shadow-glow transition hover:scale-[1.02]">View Projects</a>
              <a href="/about" className="rounded-lg border border-primary/50 bg-transparent px-6 py-3 font-semibold text-primary transition hover:bg-primary/10">Read My Story</a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-textMuted">
              <a href="https://instagram.com/tanatswastevynyahwema" className="hover:text-primary transition" target="_blank" rel="noreferrer">📸 Instagram</a>
              <a href="mailto:nyahwematanatswa82@gmail.com" className="hover:text-primary transition">✉️ Email</a>
              <a href="https://www.linkedin.com" className="hover:text-primary transition" target="_blank" rel="noreferrer">💼 LinkedIn</a>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="glass relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 p-4 shadow-2xl">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                  alt="Tanatswa profile"
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-widest text-secondary">AI Researcher</p>
                <h2 className="mt-2 text-2xl font-bold text-text">Tanatswa Stephen Nyahwema</h2>
                <p className="mt-1 text-textMuted">Zimbabwe → Taiwan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Navigation</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">Explore the portfolio</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a href="/about" className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">👤</div>
            <h3 className="text-2xl font-semibold text-text">About</h3>
            <p className="mt-3 text-textMuted">Zimbabwe to Taiwan journey, academic progression, and CV.</p>
          </a>

          <a href="/projects" className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">🤖</div>
            <h3 className="text-2xl font-semibold text-text">Projects</h3>
            <p className="mt-3 text-textMuted">LoRA architectures, custom LLMs, and AI agent experiments.</p>
          </a>

          <a href="/blog" className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-primary/40">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">📝</div>
            <h3 className="text-2xl font-semibold text-text">Blog</h3>
            <p className="mt-3 text-textMuted">Photo journal and research notes from life in Taiwan.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
