import { GraduationCap, Award, Target } from 'lucide-react';
import { useReveal } from '@/hooks';

const EDUCATION = [
  {
    title: 'Bachelor of Technology (Information Technology)',
    place: 'Dr. Mahalingam College of Engineering and Technology',
    period: 'Current Year: Second Year',
    detail: 'First Year SGPA: 9.33',
  },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl heading-underline">About Me</h2>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              I am a Second Year B.Tech Information Technology student at{' '}
              <span className="font-semibold text-slate-900 dark:text-white">
                Dr. Mahalingam College of Engineering and Technology
              </span>
              . I secured a{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                First Year SGPA of 9.33
              </span>
              .
            </p>
            <p>
              I am passionate about Java, Python, Data Structures & Algorithms, Artificial Intelligence,
              Blockchain, and Web Development. My goal is to become a skilled Software Engineer by
              continuously learning and building impactful projects.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Stat icon={<GraduationCap size={18} />} label="Second Year" value="IT Student" />
              <Stat icon={<Award size={18} />} label="SGPA" value="9.33" />
              <Stat icon={<Target size={18} />} label="Goal" value="Software Engineer" />
            </div>
          </div>

          {/* Education timeline */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-primary-600 dark:text-primary-400" />
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-900/50 space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.title} className="relative">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 ring-4 ring-white dark:ring-slate-950" />
                  <div className="glass rounded-2xl p-5">
                    <p className="font-semibold text-slate-900 dark:text-white">{edu.title}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{edu.place}</p>
                    <p className="mt-2 text-sm font-medium text-primary-600 dark:text-primary-400">{edu.period}</p>
                    <p className="mt-1 text-sm font-medium text-secondary-600 dark:text-secondary-400">{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
      <span className="text-primary-600 dark:text-primary-400">{icon}</span>
      <div>
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
