import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks';

export default function BackToTop() {
  const { showTop } = useScrollProgress();

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full grid place-items-center text-white bg-gradient-to-br from-primary-600 to-secondary-600 shadow-lg shadow-primary-500/30 transition-all duration-300 ${
        showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } hover:-translate-y-1`}
    >
      <ArrowUp size={20} />
    </button>
  );
}
