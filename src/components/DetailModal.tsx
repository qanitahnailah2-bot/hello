import { X } from 'lucide-react';
import { ReactNode, useEffect } from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  accentColor?: 'pink' | 'sage' | 'yellow' | 'lilac';
  children: ReactNode;
}

const ACCENT_MAP = {
  pink: 'bg-brand-pink',
  sage: 'bg-brand-sage',
  yellow: 'bg-brand-yellow',
  lilac: 'bg-brand-lilac',
};

export function DetailModal({
  isOpen,
  onClose,
  eyebrow,
  title,
  accentColor = 'pink',
  children,
}: DetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1A1A]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="editorial-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-brand-creambg retro-border-thick rounded-3xl p-6 sm:p-8 retro-shadow-md relative text-[#1C1A1A] max-h-[90vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b-[1.5px] border-[#1C1A1A] pb-4 mb-5">
          <div>
            <span className={`tag-badge ${ACCENT_MAP[accentColor]} text-[10px] mb-2`}>
              {eyebrow}
            </span>
            <h3
              id="editorial-modal-title"
              className="font-serif-hero text-3xl sm:text-4xl font-bold leading-tight text-[#1C1A1A]"
            >
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela detail"
            className="w-10 h-10 rounded-full retro-border bg-white hover:bg-brand-pink flex items-center justify-center shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
