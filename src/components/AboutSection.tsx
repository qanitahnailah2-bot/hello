import { Check, Copy, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';

export function AboutSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE_INFO.email}`;
    }
  };

  return (
    <section
      id="about"
      data-purpose="about-section"
      className="bg-brand-cream retro-border-thick rounded-3xl p-5 sm:p-8 md:p-10 retro-shadow-md"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-[1.5px] border-[#1C1A1A] pb-3 mb-8">
        <span className="tag-badge bg-white text-[11px]">ABOUT NAILAH</span>
        <span className="text-[11px] font-bold tracking-widest text-[#1C1A1A]/70 uppercase">
          PERSONAL PROFILE • 2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="relative bg-brand-pink retro-border-thick rounded-2xl p-6 flex flex-col justify-between min-h-[320px] overflow-hidden retro-shadow-sm">
            <div className="flex justify-between items-start gap-2">
              <span className="tag-badge bg-white text-[10px]">UNDERGRADUATE</span>
              <span className="text-xs font-serif-hero italic text-[#1C1A1A]">
                {PROFILE_INFO.status.replace('Active ', 'Active ')}
              </span>
            </div>

            <div className="my-auto py-6">
              <div className="w-16 h-16 rounded-2xl bg-white retro-border flex items-center justify-center mb-4 text-[#1C1A1A] retro-shadow-sm">
                <GraduationCap className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="font-serif-hero text-3xl font-bold text-[#1C1A1A] leading-tight">
                {PROFILE_INFO.quote}
              </h3>
            </div>

            <div className="pt-2 border-t border-[#1C1A1A]/20 flex items-center justify-between text-xs font-semibold text-[#1C1A1A]">
              <span>{PROFILE_INFO.institution}</span>
              <span>{PROFILE_INFO.period}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-center">
            <div className="bg-white retro-border rounded-xl p-3">
              <div className="text-[10px] uppercase font-bold text-[#1C1A1A]/60">Major</div>
              <div className="font-serif-hero text-lg font-bold text-[#1C1A1A]">
                {PROFILE_INFO.major}
              </div>
            </div>
            <div className="bg-brand-sage retro-border rounded-xl p-3">
              <div className="text-[10px] uppercase font-bold text-[#1C1A1A]/70">Degree</div>
              <div className="font-serif-hero text-lg font-bold text-[#1C1A1A]">
                {PROFILE_INFO.degree}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="mb-2">
              <span className="inline-block px-3 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-brand-pink retro-border">
                HELLO, I&apos;M
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-4 mb-4">
              <h2 className="font-serif-hero text-4xl sm:text-5xl font-bold text-[#1C1A1A]">
                {PROFILE_INFO.fullName}
              </h2>
              <span className="font-serif-hero italic text-xl sm:text-2xl text-[#1C1A1A]/80">
                {PROFILE_INFO.roleTitle}
              </span>
            </div>

            <div className="space-y-3 text-sm text-[#1C1A1A]/90 leading-relaxed font-normal mb-8">
              <p>
                Mahasiswa S1 Sistem Informasi di <strong>{PROFILE_INFO.institution}</strong>. Saya
                memiliki kemampuan berkomunikasi dan berbaur dengan banyak orang secara efektif,
                serta bertanggung jawab penuh terhadap setiap amanah dan tugas yang diberikan.
              </p>
              <p>
                Berpengalaman aktif dalam organisasi kepemudaan daerah khususnya{' '}
                <em>Forum Anak Provinsi Bengkulu</em>, mengasah keahlian interpersonal, manajemen
                kepanitiaan acara, serta komunikasi publik.
              </p>
            </div>
          </div>

          <div className="border-t-[1.5px] border-[#1C1A1A] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="block uppercase tracking-wider text-[10px] font-bold text-[#1C1A1A]/60 mb-1">
                PROGRAM STUDI
              </span>
              <span className="font-semibold text-[#1C1A1A]">S1 Sistem Informasi</span>
            </div>
            <div>
              <span className="block uppercase tracking-wider text-[10px] font-bold text-[#1C1A1A]/60 mb-1">
                INSTITUSI
              </span>
              <span className="font-semibold text-[#1C1A1A]">{PROFILE_INFO.institution}</span>
            </div>
            <div>
              <span className="block uppercase tracking-wider text-[10px] font-bold text-[#1C1A1A]/60 mb-1">
                EMAIL
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="font-semibold text-[#1C1A1A] underline hover:text-brand-pinkdark transition-colors"
                >
                  {PROFILE_INFO.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full retro-border bg-white hover:bg-brand-yellow text-[10px] font-bold transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3" aria-hidden="true" />
                      <span>Disalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" aria-hidden="true" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <div>
              <span className="block uppercase tracking-wider text-[10px] font-bold text-[#1C1A1A]/60 mb-1">
                STATUS
              </span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#1C1A1A]">
                <span className="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true" />
                {PROFILE_INFO.status}
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#1C1A1A]/20 flex flex-wrap items-center gap-2 text-[10px] tracking-wider uppercase font-bold text-[#1C1A1A]/75">
            {PROFILE_INFO.capabilities.map((cap, index) => (
              <span key={cap} className="inline-flex items-center gap-2">
                <span>{cap}</span>
                {index < PROFILE_INFO.capabilities.length - 1 && (
                  <span aria-hidden="true">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
