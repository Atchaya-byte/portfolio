import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '@/data';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-display font-bold text-lg text-gradient">
          Atchaya<span className="text-slate-900 dark:text-white">.R</span>
        </a>

        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 text-center">
          © 2026 Atchaya R | Built with <Heart size={13} className="text-rose-500 fill-rose-500" /> HTML, CSS, JavaScript
        </p>

        <div className="flex items-center gap-3">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-link">
            <Github size={18} />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="icon-link">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <style>{`
        .icon-link {
          width: 38px; height: 38px;
          display: grid; place-items: center;
          border-radius: 10px;
          color: rgb(71 85 105);
          transition: all 0.2s;
        }
        .icon-link:hover {
          color: #2563eb;
          background: rgba(37,99,235,0.1);
          transform: translateY(-2px);
        }
        .dark .icon-link { color: rgb(148 163 184); }
      `}</style>
    </footer>
  );
}
