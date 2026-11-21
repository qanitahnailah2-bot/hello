import { ArrowDown } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export function HeroSection() {
  return (
    <section
      id="hero"
      data-purpose="hero-section"
      className="relative bg-brand-pink p-3 sm:p-4 md:p-5 retro-border-thick rounded-3xl retro-shadow-md overflow-hidden"
    >
      <div className="bg-brand-cream retro-border-thick rounded-2xl p-6 sm:p-10 md:p-14 relative flex flex-col items-center justify-center min-h-[460px] md:min-h-[540px] text-center">
        <div className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 writing-sideways text-[10px] tracking-widest uppercase font-semibold text-[#1C1A1A]/70 select-none">
          SYSTEMS &amp; COMMUNICATION • 2026
        </div>

        <div className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-[10px] tracking-widest uppercase font-semibold text-[#1C1A1A]/70 select-none whitespace-nowrap">
          S1 SISTEM INFORMASI • IT PLN
        </div>

        <div className="mb-4">
          <span className="inline-block px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full border border-[#1C1A1A] bg-white">
            HELLO!
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-hero text-[#1C1A1A] uppercase leading-[0.9] tracking-tight mb-2">
          CREATIVE
          <br />
          PORTFOLIO
        </h1>

        <div className="my-4 transform -rotate-2 hover:rotate-0 transition-transform duration-200">
          <div className="bg-brand-sage retro-border rounded-full px-6 py-1.5 sm:px-8 sm:py-2 retro-shadow-sm inline-block">
            <span className="font-serif-hero italic text-2xl sm:text-3xl md:text-4xl text-[#1C1A1A] font-bold">
              {PROFILE_INFO.fullName}
            </span>
          </div>
        </div>

        <p className="max-w-md text-xs sm:text-sm text-[#1C1A1A]/85 font-medium mt-3 mb-6 px-4 leading-relaxed">
          {PROFILE_INFO.heroSubtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#about"
            className="tag-badge bg-[#1C1A1A] text-white hover:bg-brand-pink hover:text-[#1C1A1A] px-5 py-2.5 text-xs transition-all gap-1.5 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A]"
          >
            <span>Get To Know Me</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="tag-badge bg-white hover:bg-brand-yellow px-5 py-2.5 text-xs transition-all min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A]"
          >
            Contact Nailah
          </a>
        </div>

        <div className="mt-8 text-[10px] tracking-wider text-[#1C1A1A]/65 font-semibold uppercase">
          {PROFILE_INFO.email} • {PROFILE_INFO.location}
        </div>
      </div>
    </section>
  );
}
