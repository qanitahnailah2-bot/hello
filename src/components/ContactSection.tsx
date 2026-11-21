import { ArrowUpRight, Check, Copy, Mail, MessageSquare, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { DetailModal } from './DetailModal';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Diskusi Akademik');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE_INFO.email}`;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Mohon lengkapi nama, email, dan pesan Anda terlebih dahulu.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const resetComposer = () => {
    setIsComposerOpen(false);
    setSubmitted(false);
    setFormError('');
    setSenderName('');
    setSenderEmail('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      data-purpose="contact-section"
      className="bg-brand-cream retro-border-thick rounded-3xl p-6 sm:p-10 md:p-14 retro-shadow-md text-center flex flex-col items-center"
    >
      <div className="mb-3">
        <span className="tag-badge bg-brand-pink text-[11px]">LET&apos;S CONNECT</span>
      </div>

      <h2 className="font-serif-hero text-4xl sm:text-6xl md:text-7xl font-bold text-[#1C1A1A] mb-3 tracking-tight">
        Let&apos;s start a conversation.
      </h2>

      <p className="max-w-md text-xs sm:text-sm text-[#1C1A1A]/85 font-medium mb-8 leading-relaxed">
        Terbuka untuk diskusi akademik, jejaring organisasi, serta peluang kolaborasi yang
        bermanfaat.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl mb-6">
        <a
          href={`mailto:${PROFILE_INFO.email}`}
          className="tag-badge bg-[#1C1A1A] text-white hover:bg-brand-pink hover:text-[#1C1A1A] px-6 py-3 text-xs sm:text-sm font-bold transition-all retro-shadow-sm gap-2 min-h-[44px]"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>{PROFILE_INFO.email}</span>
        </a>

        <a
          href={PROFILE_INFO.socials.linkedin}
          rel="noopener noreferrer"
          target="_blank"
          className="tag-badge bg-white hover:bg-brand-sage px-5 py-3 text-xs sm:text-sm font-bold transition-all retro-shadow-sm gap-1.5 min-h-[44px]"
        >
          <span>LinkedIn</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <a
          href={PROFILE_INFO.socials.instagram}
          rel="noopener noreferrer"
          target="_blank"
          className="tag-badge bg-white hover:bg-brand-pink px-5 py-3 text-xs sm:text-sm font-bold transition-all retro-shadow-sm gap-1.5 min-h-[44px]"
        >
          <span>Instagram</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="tag-badge bg-brand-creambg hover:bg-brand-yellow px-4 py-2 text-[11px] transition-colors cursor-pointer gap-1.5 min-h-[36px]"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Email Disalin</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Salin Email</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => setIsComposerOpen(true)}
          className="tag-badge bg-brand-sage hover:bg-brand-pink px-4 py-2 text-[11px] transition-colors cursor-pointer gap-1.5 min-h-[36px]"
        >
          <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Kirim Pesan Langsung</span>
        </button>
      </div>

      <div className="w-full border-t border-[#1C1A1A]/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-semibold text-[#1C1A1A]/75 gap-2">
        <span>
          © {currentYear} {PROFILE_INFO.fullName}. All rights reserved.
        </span>
        <span>
          S1 {PROFILE_INFO.major} • {PROFILE_INFO.institution}
        </span>
      </div>

      <DetailModal
        isOpen={isComposerOpen}
        onClose={resetComposer}
        eyebrow="LET'S CONNECT"
        title="Kirim Pesan ke Nailah"
        accentColor="pink"
      >
        {submitted ? (
          <div className="bg-brand-sage retro-border rounded-2xl p-6 text-left space-y-4">
            <div className="font-serif-hero text-3xl font-bold text-[#1C1A1A]">
              Terima kasih, {senderName}!
            </div>
            <p className="text-sm text-[#1C1A1A]/90 leading-relaxed">
              Pesan Anda bertopik <strong>{topic}</strong> sudah siap dikirim. Anda juga dapat
              membuka aplikasi email langsung agar pesan tersampaikan ke{' '}
              <span className="underline font-semibold">{PROFILE_INFO.email}</span>.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={`mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(
                  `[${topic}] Pesan dari ${senderName}`
                )}&body=${encodeURIComponent(
                  `${message}\n\nDikirim oleh: ${senderName} (${senderEmail})`
                )}`}
                className="tag-badge bg-[#1C1A1A] text-white hover:bg-brand-pink hover:text-[#1C1A1A] px-4 py-2.5 text-xs gap-1.5"
              >
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Buka di Aplikasi Email</span>
              </a>
              <button
                type="button"
                onClick={resetComposer}
                className="tag-badge bg-white hover:bg-brand-yellow px-4 py-2.5 text-xs cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
            {formError && (
              <div
                role="alert"
                className="bg-brand-pink/35 retro-border rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1C1A1A]"
              >
                {formError}
              </div>
            )}

            <div>
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1A1A] mb-1.5"
              >
                Nama Lengkap
              </label>
              <input
                id="contact-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Nama Anda"
                className="w-full bg-brand-creambg retro-border rounded-xl px-4 py-3 text-sm text-[#1C1A1A] placeholder:text-[#1C1A1A]/45 focus:outline-none focus:ring-2 focus:ring-[#1C1A1A] focus:bg-brand-pink/15 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1A1A] mb-1.5"
              >
                Alamat Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full bg-brand-creambg retro-border rounded-xl px-4 py-3 text-sm text-[#1C1A1A] placeholder:text-[#1C1A1A]/45 focus:outline-none focus:ring-2 focus:ring-[#1C1A1A] focus:bg-brand-pink/15 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-topic"
                className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1A1A] mb-1.5"
              >
                Topik Kolaborasi
              </label>
              <select
                id="contact-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full bg-brand-creambg retro-border rounded-xl px-4 py-3 text-sm text-[#1C1A1A] focus:outline-none focus:ring-2 focus:ring-[#1C1A1A] focus:bg-brand-pink/15 transition-colors"
              >
                <option value="Diskusi Akademik">Diskusi Akademik</option>
                <option value="Jejaring Organisasi">Jejaring Organisasi</option>
                <option value="Event & MC Nonformal">Event &amp; MC Nonformal</option>
                <option value="Kolaborasi Proyek">Kolaborasi Proyek</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-bold uppercase tracking-wider text-[#1C1A1A] mb-1.5"
              >
                Pesan
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ceritakan singkat diskusi atau kolaborasi yang ingin Anda ajukan..."
                className="w-full bg-brand-creambg retro-border rounded-xl px-4 py-3 text-sm text-[#1C1A1A] placeholder:text-[#1C1A1A]/45 focus:outline-none focus:ring-2 focus:ring-[#1C1A1A] focus:bg-brand-pink/15 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={resetComposer}
                className="tag-badge bg-white hover:bg-brand-cream px-5 py-2.5 text-xs cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="tag-badge bg-brand-pink hover:bg-[#1C1A1A] hover:text-white px-5 py-2.5 text-xs cursor-pointer gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Kirim Pesan</span>
              </button>
            </div>
          </form>
        )}
      </DetailModal>
    </section>
  );
}
