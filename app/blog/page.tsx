export default function Blog() {
  const entries = [
    {
      title: 'Life in Hualien',
      description: 'A cultural synthesis of study, local life, and reflection on living across continents.',
      image: 'https://images.unsplash.com/photo-1505761671935-60a5f2e17b3d?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'LLM Research Log',
      description: 'Documenting the process of model adaptation, fine-tuning experiments, and cultural linguistics.',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Agents & Systems',
      description: 'What I learned about tool use, orchestration, agentic workflows, and intelligent automation.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Language & Culture',
      description: 'Reflections on Shona, Mandarin, and building AI that respects linguistic diversity.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Taiwan Tech Scene',
      description: 'Exploring innovation, entrepreneurship, and the vibrant startup ecosystem in Taiwan.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Cross-Border Collaboration',
      description: 'Building bridges between African and Asian tech communities through open research.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Blog</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">Life in Taiwan & Research Notes</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {entries.map((entry, i) => (
          <article key={i} className="glass group rounded-2xl overflow-hidden hover:-translate-y-1 transition">
            <div className="h-48 overflow-hidden">
              <img
                src={entry.image}
                alt={entry.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-text">{entry.title}</h2>
              <p className="mt-2 text-textMuted">{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
