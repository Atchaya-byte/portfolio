import { useEffect, useRef, useState } from 'react';
import { Code2, Globe, Database, Wrench, Rocket } from 'lucide-react';
import { useReveal } from '@/hooks';
import { SKILLS, LEARNING } from '@/data';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 size={20} />,
  'Web Technologies': <Globe size={20} />,
  Database: <Database size={20} />,
  Tools: <Wrench size={20} />,
};

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 sm:py-32 bg-slate-50/60 dark:bg-slate-950/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl heading-underline">Technical Skills</h2>

        <div ref={sectionRef} className="mt-12 grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category} className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-lg flex items-center gap-2 mb-5">
                <span className="text-primary-600 dark:text-primary-400">{CATEGORY_ICONS[category]}</span>
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-700 dark:text-slate-200">{s.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500"
                        style={{ width: animate ? `${s.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-8 glass rounded-2xl p-6">
          <h3 className="font-display font-semibold text-lg flex items-center gap-2 mb-5">
            <span className="text-secondary-600 dark:text-secondary-400">
              <Rocket size={20} />
            </span>
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {LEARNING.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-slate-700 dark:text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
