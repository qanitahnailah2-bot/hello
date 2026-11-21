import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'interests', label: 'Interests' },
];

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-2 sm:top-4 z-50 w-full">
      <nav
        aria-label="Main Navigation"
        className="bg-[#F7F5EE]/95 backdrop-blur-md retro-border-thick rounded-2xl px-4 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-8 retro-shadow-sm transition-all"
      >
        <a
          href="#hero"
          className="font-serif-hero text-2xl font-bold tracking-tight text-[#1C1A1A] hover:text-brand-pinkdark transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A] rounded"
        >
          NQ<span className="text-brand-pinkdark">.</span>
        </a>

        <div className="hidden sm:flex items-center gap-1.5 md:gap-3 text-xs md:text-sm font-semibold text-[#1C1A1A]">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1.5 rounded-full transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A] ${
                  isActive
                    ? 'bg-brand-pink/50 text-[#1C1A1A] underline underline-offset-4'
                    : 'hover:bg-brand-pink/30'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            className="tag-badge bg-[#eaf8a5] hover:bg-brand-pinkdark hover:text-white transition-all text-xs min-h-[36px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A]"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full retro-border bg-white text-[#1C1A1A] hover:bg-brand-pink/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 bg-[#F7F5EE] retro-border-thick rounded-2xl p-3 retro-shadow-sm flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleLinkClick}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold text-[#1C1A1A] transition-colors ${
                  isActive ? 'bg-brand-pink/50' : 'hover:bg-brand-pink/25'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
