'use client';

import { useState } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant. Ask me anything about Tanatswa\'s work, AI research, or this portfolio.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    const responses = {
      'projects': 'Tanatswa works on LoRA fine-tuning, custom LLMs, and AI agents for cross-cultural applications.',
      'location': 'Tanatswa studies at Tzu Chi University in Taiwan but is originally from Zimbabwe.',
      'email': 'You can reach Tanatswa at nyahwematanatswa82@gmail.com',
      'instagram': 'Follow on Instagram: @tanatswastevynyahwema',
      'ai': 'The research focuses on AI systems that bridge cultures and languages, especially for low-resource languages like Shona.',
      'default': 'That\'s an interesting question! Feel free to reach out to Tanatswa directly for more details.'
    };

    const query = input.toLowerCase();
    let response = responses.default;

    if (query.includes('project')) response = responses.projects;
    else if (query.includes('location') || query.includes('where')) response = responses.location;
    else if (query.includes('email') || query.includes('contact')) response = responses.email;
    else if (query.includes('instagram')) response = responses.instagram;
    else if (query.includes('ai') || query.includes('research')) response = responses.ai;

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[#25005a] shadow-glow transition hover:scale-105"
        aria-label="Open AI Assistant"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 rounded-2xl border border-white/10 bg-surface shadow-2xl flex flex-col max-h-96">
          {/* Header */}
          <div className="border-b border-white/10 p-4">
            <h3 className="font-display font-bold text-text">AI Assistant</h3>
            <p className="text-xs text-textMuted">Ask about Tanatswa's work & AI research</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-[#25005a]'
                      : 'bg-surface-2 text-text'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 rounded-lg border border-white/10 bg-surface-2 px-3 py-2 text-sm text-text placeholder-textMuted outline-none focus:border-primary"
            />
            <button
              onClick={handleSend}
              className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-[#25005a] hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
