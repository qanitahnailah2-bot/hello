import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import {
  EXPERIENCE_FILTERS,
  EXPERIENCE_ITEMS,
  ExperienceCategory,
  ExperienceItem,
} from '../data/portfolioData';
import { DetailModal } from './DetailModal';

const BADGE_BG = {
  lilac: 'bg-brand-lilac',
  pink: 'bg-brand-pink',
  yellow: 'bg-brand-yellow',
  sage: 'bg-brand-sage',
};

export function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>('all');
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const visibleExperiences =
    activeFilter === 'all'
      ? EXPERIENCE_ITEMS
      : EXPERIENCE_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="experience"
      data-purpose="experience-section"
      className="bg-[#f3e4ae] retro-border-thick rounded-3xl p-5 sm:p-8 md:p-10 retro-shadow-md"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[1.5px] border-[#1C1A1A] pb-3 mb-8">
        <span className="tag-badge bg-white text-[11px]">ORGANIZATION &amp; EVENTS</span>
        <span className="text-[11px] font-bold tracking-widest text-[#1C1A1A]/70 uppercase">
          PROVEN INVOLVEMENT
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <h2 className="font-serif-hero text-4xl sm:text-5xl font-bold text-[#1C1A1A] leading-tight mb-4">
              Experience
              <br />
              &amp; Impact
            </h2>
            <div className="mb-4">
              <span className="tag-badge bg-brand-pink text-[10px]">CORE COMMITMENT</span>
            </div>
            <p className="text-xs sm:text-sm text-[#1C1A1A]/85 leading-relaxed mb-6">
              Pengalaman organisasi di Forum Anak Provinsi Bengkulu yang melatih komunikasi publik,
              kepedulian sosial, serta koordinasi lintas wilayah.
            </p>

            <div className="bg-white retro-border rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="tag-badge bg-brand-yellow text-[9px]">KEY AREAS</span>
                {activeFilter !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setActiveFilter('all')}
                    className="text-[10px] font-bold underline text-[#1C1A1A]/75 hover:text-[#1C1A1A] cursor-pointer"
                  >
                    Tampilkan semua
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-1.5" role="group" aria-label="Filter pengalaman">
                {EXPERIENCE_FILTERS.filter((f) => f.id !== 'all').map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() =>
                        setActiveFilter((prev) => (prev === filter.id ? 'all' : filter.id))
                      }
                      aria-pressed={isActive}
                      className={`text-left text-xs px-3 py-2 rounded-xl border transition-colors cursor-pointer font-medium flex items-center justify-between gap-2 ${
                        isActive
                          ? 'bg-brand-pink/50 border-[#1C1A1A] font-bold text-[#1C1A1A]'
                          : 'bg-brand-creambg/60 border-transparent hover:border-[#1C1A1A]/40 text-[#1C1A1A]'
                      }`}
                    >
                      <span>• {filter.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[#1C1A1A]/65 italic font-serif-hero pt-2">
            *Semua data berdasarkan riwayat CV terverifikasi. Klik kartu untuk detail peran.
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4">
          {visibleExperiences.map((exp) => (
            <article
              key={exp.id}
              className={`bg-white retro-border-thick rounded-2xl p-5 sm:p-6 retro-shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${
                exp.accentLeft ? 'border-l-8 border-l-brand-pink' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedExperience(exp)}
                className="w-full text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1A1A] rounded-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {exp.badges.map((badge) => (
                      <span
                        key={badge.label}
                        className={`tag-badge ${BADGE_BG[badge.color]} text-[10px]`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#1C1A1A] tabular-nums">
                      {exp.period}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#1C1A1A]/60 group-hover:text-[#1C1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className="font-serif-hero text-2xl font-bold text-[#1C1A1A] group-hover:underline underline-offset-4">
                  {exp.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1C1A1A]/60 mb-3">
                  {exp.organization}
                </p>
                <p className="text-xs sm:text-sm text-[#1C1A1A]/85 leading-relaxed border-t border-[#1C1A1A]/15 pt-3">
                  {exp.summary}
                </p>
              </button>
            </article>
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={Boolean(selectedExperience)}
        onClose={() => setSelectedExperience(null)}
        eyebrow={selectedExperience ? selectedExperience.period : ''}
        title={selectedExperience ? selectedExperience.title : ''}
        accentColor={selectedExperience?.badges[0]?.color ?? 'pink'}
      >
        {selectedExperience && (
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {selectedExperience.badges.map((badge) => (
                <span key={badge.label} className={`tag-badge ${BADGE_BG[badge.color]} text-[10px]`}>
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white retro-border rounded-2xl p-4 text-xs">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1C1A1A]/60 mb-0.5">
                  Organisasi / Acara
                </span>
                <span className="font-semibold text-[#1C1A1A]">
                  {selectedExperience.organization}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1C1A1A]/60 mb-0.5">
                  Fokus Peran
                </span>
                <span className="font-semibold text-[#1C1A1A]">
                  {selectedExperience.details.roleFocus}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#1C1A1A]/90 leading-relaxed">
              {selectedExperience.summary}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1A1A]/70 mb-2.5">
                Kontribusi Utama
              </h4>
              <ul className="space-y-2">
                {selectedExperience.details.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#1C1A1A] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </DetailModal>
    </section>
  );
}
