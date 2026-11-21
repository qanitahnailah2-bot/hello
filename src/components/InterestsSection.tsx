import { Clapperboard, Headphones } from 'lucide-react';
import { useState } from 'react';
import { INTEREST_ITEMS, InterestItem } from '../data/portfolioData';
import { DetailModal } from './DetailModal';

export function InterestsSection() {
  const [selectedInterest, setSelectedInterest] = useState<InterestItem | null>(null);

  return (
    <section
      id="interests"
      data-purpose="interests-section"
      className="bg-brand-pink retro-border-thick rounded-3xl p-5 sm:p-8 md:p-10 retro-shadow-md text-[#1C1A1A]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[1.5px] border-[#1C1A1A] pb-3 mb-8">
        <span className="tag-badge bg-white text-[11px]">BEYOND THE CLASSROOM</span>
        <span className="text-[11px] font-bold tracking-widest text-[#1C1A1A] uppercase">
          PERSONAL INTERESTS
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="tag-badge bg-brand-sage text-[10px] mb-2">MY FAVE</span>
          <h2 className="font-serif-hero text-4xl sm:text-5xl font-bold text-[#1C1A1A] leading-tight">
            Music &amp; Movies
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1A1A]/90 max-w-md mt-2 leading-relaxed">
            Di luar kesibukan akademik dan organisasi, mendengarkan musik dan menonton film menjadi
            sarana penyegaran inspirasi dan eksplorasi kreativitas.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          {INTEREST_ITEMS.map((item) => {
            const Icon = item.id === 'music' ? Headphones : Clapperboard;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedInterest(item)}
                className={`flex-1 md:w-44 bg-brand-cream retro-border-thick rounded-2xl p-4 text-center retro-shadow-sm transform transition-transform duration-200 cursor-pointer hover:bg-brand-creambg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A] ${item.tiltClass}`}
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-white retro-border flex items-center justify-center text-[#1C1A1A]">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="font-serif-hero text-xl font-bold text-[#1C1A1A]">
                  {item.title}
                </div>
                <div className="text-[10px] font-semibold text-[#1C1A1A]/65 uppercase tracking-wider">
                  {item.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <DetailModal
        isOpen={Boolean(selectedInterest)}
        onClose={() => setSelectedInterest(null)}
        eyebrow="MY FAVE"
        title={selectedInterest ? selectedInterest.title : ''}
        accentColor="sage"
      >
        {selectedInterest && (
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#1C1A1A]/60">
              {selectedInterest.subtitle}
            </p>
            <p className="text-sm text-[#1C1A1A]/90 leading-relaxed">
              {selectedInterest.description}
            </p>

            <div className="bg-white retro-border rounded-2xl p-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1C1A1A]/60 mb-2">
                Nuansa &amp; Eksplorasi
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedInterest.themes.map((theme) => (
                  <span key={theme} className="tag-badge bg-brand-yellow text-[10px]">
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-brand-cream retro-border rounded-2xl p-4 text-xs sm:text-sm text-[#1C1A1A]/85 leading-relaxed">
              <strong className="block text-[10px] uppercase tracking-wider mb-1 text-[#1C1A1A]">
                Perspektif Kreatif
              </strong>
              {selectedInterest.whyItMatters}
            </div>
          </div>
        )}
      </DetailModal>
    </section>
  );
}
