import { Code2, Scale, BrainCircuit, Cpu, Award } from 'lucide-react';
import { useReveal } from '@/hooks';
import { CERTIFICATIONS, ACHIEVEMENTS } from '@/data';

const ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Scale: <Scale size={24} />,
  BrainCircuit: <BrainCircuit size={24} />,
  Cpu: <Cpu size={24} />,
};

export default function Certifications() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-950/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl heading-underline">
          Certifications & Achievements
        </h2>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Certifications */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {CERTIFICATIONS.map((c) => (
              <div
                key={c.title}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl grid place-items-center text-white bg-gradient-to-br from-primary-600 to-secondary-600 group-hover:scale-110 transition-transform">
                    {ICONS[c.icon]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white leading-snug">{c.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{c.org}</p>
                    {c.score && (
                      <span className="mt-2 inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        Score: {c.score}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-semibold text-lg flex items-center gap-2 mb-5">
              <Award size={20} className="text-secondary-600 dark:text-secondary-400" />
              Achievements
            </h3>
            <ul className="space-y-4">
              {ACHIEVEMENTS.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
