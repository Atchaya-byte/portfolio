import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { useTypingEffect } from '@/hooks';
import { ROLES } from '@/data';

export default function Hero() {
  const typed = useTypingEffect(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob w-[480px] h-[480px] bg-primary-500 -top-20 -left-20 animate-float" />
        <div
          className="blob w-[420px] h-[420px] bg-secondary-500 top-40 right-0 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="blob w-[360px] h-[360px] bg-accent-500 bottom-0 left-1/3 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-slate-600 dark:text-slate-300 mb-8 animate-fade-in">
          <Sparkles size={15} className="text-accent-500" />
          Open to internships & opportunities
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight animate-fade-up">
          Hi, I'm <span className="text-gradient">Atchaya R</span>
        </h1>

        <div className="mt-5 h-9 sm:h-10 text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-200 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <span className="text-primary-600 dark:text-primary-400">{typed}</span>
          <span className="cursor">&nbsp;</span>
        </div>

        <p
          className="mt-7 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Passionate about software development, problem-solving, Artificial Intelligence, Blockchain,
          and Full Stack Development. I enjoy learning new technologies and building real-world projects
          while continuously improving my programming skills.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass hover:-translate-y-0.5 transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass hover:-translate-y-0.5 transition-all"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-16 rounded-full border-2 border-slate-300 dark:border-slate-700 flex items-start justify-center p-2"
      >
        <span className="w-1.5 h-3 rounded-full bg-slate-400 dark:bg-slate-500 animate-bounce" />
      </a>
    </section>
  );
}
