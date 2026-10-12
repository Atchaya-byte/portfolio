import { useScrollProgress } from '@/hooks';

export default function ScrollProgress() {
  const { progress } = useScrollProgress();
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
