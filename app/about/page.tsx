export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-10">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">About</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl">From Zimbabwe to Taiwan</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-2xl p-6 md:p-8">
          <p className="text-lg leading-8 text-textMuted">
            I am Tanatswa Stephen Nyahwema, a technology-minded researcher and student bridging African roots with Taiwan's innovation ecosystem. My path has been shaped by curiosity, resilience, and a desire to use AI to solve real-world communication and cultural challenges.
          </p>
          <p className="mt-6 text-lg leading-8 text-textMuted">
            Growing up in Zimbabwe, I developed a deep interest in solving problems through logic, design, and community. Moving to Taiwan for academic growth at Tzu Chi University opened a new chapter in my life, where I explored AI, international services, and the intersection of technology with cultural understanding.
          </p>
          <p className="mt-6 text-lg leading-8 text-textMuted">
            My research focuses on building AI systems that can bridge language barriers and cultural contexts, especially for underrepresented languages like Shona. I believe technology should serve humanity and foster connection across borders.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl">Academic Focus</h2>
          <ul className="mt-5 space-y-4 text-textMuted">
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>AI and language models (LLMs)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Custom LLM fine-tuning and adaptation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>LoRA and parameter-efficient learning</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Cross-cultural digital systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>AI agents and intelligent workflows</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>Infrastructure and deployment for AI</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#" className="rounded-lg bg-primary px-6 py-3 font-semibold text-[#25005a] hover:scale-105 transition">Download CV</a>
        <a href="mailto:nyahwematanatswa82@gmail.com" className="rounded-lg border border-primary/50 px-6 py-3 font-semibold text-primary hover:bg-primary/10 transition">Email Me</a>
      </div>
    </main>
  );
}
