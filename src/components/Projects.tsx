import { Boxes, Trophy, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks';
import { PROJECTS } from '@/data';

const ICONS: Record<string, React.ReactNode> = {
  Boxes: <Boxes size={26} />,
  Trophy: <Trophy size={26} />,
};

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl heading-underline">Projects</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div
                className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${p.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}
              />
              <div
                className={`w-14 h-14 rounded-2xl grid place-items-center text-white bg-gradient-to-br ${p.gradient} mb-5 group-hover:scale-110 transition-transform`}
              >
                {ICONS[p.icon]}
              </div>

              <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View details <ArrowUpRight size={15} />
              </div>
            </article>
          ))}

          {/* Placeholder for future projects */}
          <article className="glass rounded-2xl p-7 border-dashed flex flex-col items-center justify-center text-center min-h-[220px]">
            <p className="text-slate-500 dark:text-slate-400 font-medium">More projects coming soon</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              I'm continuously building — check back for updates.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
