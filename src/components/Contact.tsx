import { useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/data';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend configured — simulate success and reset.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-950/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl heading-underline">Get In Touch</h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-5">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations, or just a friendly chat
              about technology. Feel free to reach out!
            </p>

            <div className="space-y-3">
              <ContactLink
                href={`mailto:${EMAIL}`}
                icon={<Mail size={20} />}
                label="Email"
                value={EMAIL}
              />
              <ContactLink href={GITHUB_URL} icon={<Github size={20} />} label="GitHub" value="@Atchaya-byte" external />
              <ContactLink
                href={LINKEDIN_URL}
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="Atchaya R"
                external
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="input"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="input"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="input resize-none"
              />
            </Field>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
            {sent && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 text-center">
                Thanks! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(148,163,184,0.25);
          color: inherit;
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        }
      `}</style>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 glass rounded-2xl p-4 hover:-translate-y-0.5 transition-transform group"
    >
      <span className="w-11 h-11 rounded-xl grid place-items-center text-white bg-gradient-to-br from-primary-600 to-secondary-600 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
        <p className="font-medium text-slate-900 dark:text-white">{value}</p>
      </div>
    </a>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">{label}</span>
      {children}
    </label>
  );
}
