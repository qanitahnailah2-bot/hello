import { useState } from 'react';
import { EDUCATION_ITEMS } from '../data/portfolioData';

export function EducationSection() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const highSchool = EDUCATION_ITEMS.find((item) => item.id === 'sman-2');
  const activeSubjectNote = highSchool?.subjects?.find((s) => s.name === selectedSubject);

  return (
    <section
      id="education"
      data-purpose="education-section"
      className="bg-brand-pink retro-border-thick rounded-3xl p-5 sm:p-8 md:p-10 retro-shadow-md text-[#1C1A1A]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[1.5px] border-[#1C1A1A] pb-3 mb-8">
        <span className="tag-badge bg-white text-[11px]">ACADEMIC BACKGROUND</span>
        <span className="text-[11px] font-bold tracking-widest text-[#1C1A1A] uppercase">
          EDUCATION TIMELINE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <span className="tag-badge bg-brand-yellow text-[10px] mb-3">JOURNEY</span>
          <h2 className="font-serif-hero text-5xl sm:text-6xl font-bold leading-[0.95] text-[#1C1A1A] mb-4">
            Academic
            <br />
            Pathways
          </h2>
          <p className="text-xs sm:text-sm text-[#1C1A1A]/90 max-w-sm leading-relaxed">
            Riwayat pendidikan formal dari sekolah menengah atas hingga menempuh studi sarjana
            sistem informasi.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          {EDUCATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-brand-cream retro-border-thick rounded-2xl p-5 sm:p-6 retro-shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span
                  className={`tag-badge text-[10px] ${
                    item.badgeColor === 'sage' ? 'bg-brand-sage' : 'bg-white'
                  }`}
                >
                  {item.badge}
                </span>
                <span className="text-xs font-bold font-mono tracking-wider tabular-nums">
                  {item.period}
                </span>
              </div>

              <h3 className="font-serif-hero text-2xl sm:text-3xl font-bold text-[#1C1A1A] mt-1">
                {item.institution}
              </h3>
              <p className="font-medium text-sm text-[#1C1A1A]/80 mb-3">{item.program}</p>

              {item.description && (
                <p className="text-xs text-[#1C1A1A]/75 leading-relaxed border-t border-[#1C1A1A]/20 pt-3">
                  {item.description}
                </p>
              )}

              {item.subjects && (
                <div className="border-t border-[#1C1A1A]/20 pt-3">
                  <span className="text-[10px] uppercase font-bold text-[#1C1A1A]/60 block mb-2">
                    Mata Pelajaran Utama (klik untuk detail):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.subjects.map((subject) => {
                      const isSelected = selectedSubject === subject.name;
                      return (
                        <button
                          key={subject.name}
                          type="button"
                          onClick={() =>
                            setSelectedSubject((prev) =>
                              prev === subject.name ? null : subject.name
                            )
                          }
                          aria-pressed={isSelected}
                          className={`tag-badge text-[10px] py-1 px-2.5 cursor-pointer transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1A1A] ${
                            isSelected
                              ? 'bg-[#1C1A1A] text-white'
                              : subject.highlight
                                ? 'bg-brand-yellow hover:bg-brand-pink'
                                : 'bg-white hover:bg-brand-sage'
                          }`}
                        >
                          {subject.name}
                        </button>
                      );
                    })}
                  </div>

                  {activeSubjectNote && (
                    <div className="mt-3 bg-brand-creambg retro-border rounded-xl p-3 text-xs text-[#1C1A1A]/85 leading-relaxed">
                      <span className="font-bold text-[#1C1A1A]">{activeSubjectNote.name}: </span>
                      {activeSubjectNote.note}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
