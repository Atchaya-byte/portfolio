import { Github, Linkedin, Code, Terminal, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks';
import { CODING_PROFILES } from '@/data';

const ICONS: Record<string, React.ReactNode> = {
  Github: <Github size={26} />,
  Linkedin: <Linkedin size={26} />,
  Code: <Code size={26} />,
  Terminal: <Terminal size={26} />,
};

export default function CodingProfiles() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl heading-underline">Coding Profiles</h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CODING_PROFILES.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target={p.available ? '_blank' : undefined}
              rel={p.available ? 'noopener noreferrer' : undefined}
              className={`group relative glass rounded-2xl p-6 overflow-hidden transition-all duration-300 ${
                p.available ? 'hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-500/10' : 'cursor-default opacity-70'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`w-12 h-12 rounded-xl grid place-items-center ${
                    p.available
                      ? 'text-white bg-gradient-to-br from-primary-600 to-secondary-600 group-hover:scale-110 transition-transform'
                      : 'text-slate-400 dark:text-slate-600 bg-slate-200 dark:bg-slate-800'
                  }`}
                >
                  {ICONS[p.icon]}
                </span>
                {p.available && (
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                  />
                )}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{p.handle}</p>
              {!p.available && (
                <span className="mt-2 inline-block text-xs font-medium px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  Coming Soon
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
