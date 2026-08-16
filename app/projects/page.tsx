export default function Projects() {
  const projects = [
    {
      title: 'Cross-Lingual Sentiment Agent',
      description: 'An LLM-based architecture designed to interpret nuanced sentiment in Shona and Mandarin',
      tags: ['Python', 'PyTorch', 'LLMs'],
    },
    {
      title: 'LoRA Fine-Tuning Pipeline',
      description: 'Parameter-efficient training framework for low-resource languages and domain adaptation',
      tags: ['LoRA', 'Transformers', 'Hugging Face'],
    },
    {
      title: 'Custom LLM Adaptation',
      description: 'Fine-tuned multilingual models for structured reasoning and cultural context preservation',
      tags: ['Python', 'PyTorch', 'NLP'],
    },
    {
      title: 'AI Agent Framework',
      description: 'Autonomous reasoning agents with tool use, memory management, and collaborative task execution',
      tags: ['LangChain', 'Agents', 'Python'],
    },
    {
      title: 'Neural Translation Core',
      description: 'Optimizing transformer models for low-resource language pairs with focus on African languages',
      tags: ['Transformers', 'NLP', 'Translation'],
    },
    {
      title: 'AI Infrastructure & Deployment',
      description: 'Production-ready pipelines for model deployment, scaling, and monitoring at cloud scale',
      tags: ['Docker', 'AWS', 'DevOps'],
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Projects</p>
      <h1 className="mt-3 font-display text-4xl md:text-6xl">AI Research & Experiments</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <article key={i} className="glass rounded-2xl p-6 hover:-translate-y-1 transition">
            <h2 className="text-2xl font-semibold text-text">{project.title}</h2>
            <p className="mt-3 text-textMuted">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span key={j} className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
