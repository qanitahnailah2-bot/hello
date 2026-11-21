export interface EducationItem {
  id: string;
  badge: string;
  badgeColor: 'sage' | 'white';
  period: string;
  institution: string;
  program: string;
  description?: string;
  subjects?: {
    name: string;
    highlight?: boolean;
    note: string;
  }[];
}

export type ExperienceCategory = 'all' | 'advokasi' | 'event' | 'humas';

export interface ExperienceItem {
  id: string;
  category: Exclude<ExperienceCategory, 'all'>;
  badges: {
    label: string;
    color: 'lilac' | 'pink' | 'yellow' | 'sage';
  }[];
  period: string;
  title: string;
  organization: string;
  summary: string;
  accentLeft?: boolean;
  details: {
    location: string;
    roleFocus: string;
    highlights: string[];
  };
}

export interface InterestItem {
  id: 'music' | 'movies';
  title: string;
  subtitle: string;
  tiltClass: string;
  description: string;
  themes: string[];
  whyItMatters: string;
}

export const PROFILE_INFO = {
  brandMark: 'NQ',
  fullName: 'Nailah Qanitah',
  roleTitle: 'Information Systems Student',
  email: 'qanitahnailah2@gmail.com',
  location: 'Jakarta',
  institution: 'Institut Teknologi PLN',
  degree: 'Strata-1 (S1)',
  major: 'Sistem Informasi',
  period: '2026—Now',
  status: 'Active Undergraduate',
  quote: '"Senang belajar, berkomunikasi & berkolaborasi."',
  heroSubtitle:
    'Mahasiswa S1 Sistem Informasi di Institut Teknologi PLN yang senang belajar, berkomunikasi, berkolaborasi, dan mengembangkan pengalaman baru.',
  aboutParagraphs: [
    'Mahasiswa S1 Sistem Informasi di Institut Teknologi PLN. Saya memiliki kemampuan berkomunikasi dan berbaur dengan banyak orang secara efektif, serta bertanggung jawab penuh terhadap setiap amanah dan tugas yang diberikan.',
    'Berpengalaman aktif dalam organisasi kepemudaan daerah khususnya Forum Anak Provinsi Bengkulu, mengasah keahlian interpersonal, manajemen kepanitiaan acara, serta komunikasi publik.',
  ],
  capabilities: [
    'COMMUNICATION',
    'EVENT HOSTING',
    'ORGANIZATIONAL LEADERSHIP',
    'SYSTEMS THINKING',
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/in/nailah-qanitah-2016a2433/',
    instagram: 'https://www.instagram.com/nailahqanitahh/',
  },
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'it-pln',
    badge: 'CURRENT EDUCATION',
    badgeColor: 'sage',
    period: '2026 — SEKARANG',
    institution: 'Institut Teknologi PLN',
    program: 'Strata-1 (S1) Sistem Informasi',
    description:
      'Fokus pada pemahaman arsitektur sistem informasi, analisis proses organisasi, serta pengembangan kapabilitas teknologi informasi.',
  },
  {
    id: 'sman-2',
    badge: 'HIGH SCHOOL',
    badgeColor: 'white',
    period: '2023 — 2026',
    institution: 'SMAN 2 Kota Bengkulu',
    program: 'Pendidikan Menengah Atas',
    subjects: [
      {
        name: 'Matematika',
        note: 'Fondasi logika analitis, pemodelan kuantitatif, dan pemecahan masalah terstruktur.',
      },
      {
        name: 'Fisika',
        note: 'Pemahaman sistem fisis, ketelitian eksperimen, dan penalaran berbasis prinsip.',
      },
      {
        name: 'Biologi',
        note: 'Observasi sistematis terhadap ekosistem, struktur kompleks, dan keterkaitan komponen.',
      },
      {
        name: 'Informatika',
        highlight: true,
        note: 'Pengenalan pemikiran komputasional, logika pemrograman, dan pengelolaan data digital.',
      },
    ],
  },
];

export const EXPERIENCE_FILTERS: {
  id: ExperienceCategory;
  label: string;
}[] = [
  { id: 'all', label: 'Semua Pengalaman' },
  { id: 'advokasi', label: 'Perlindungan Khusus Hak Anak' },
  { id: 'event', label: 'Nonformal Public Speaking & MC' },
  { id: 'humas', label: 'Humas & Koordinasi Kabupaten' },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'divisi-perlindungan',
    category: 'advokasi',
    badges: [{ label: 'DIVISI', color: 'lilac' }],
    period: '2025',
    title: 'Divisi Perlindungan Khusus',
    organization: 'FORUM ANAK PROVINSI BENGKULU',
    summary:
      'Bagian dari Divisi Perlindungan Khusus Forum Anak Provinsi Bengkulu, berkontribusi aktif dalam advokasi dan pendampingan hak-hak anak di tingkat provinsi.',
    details: {
      location: 'Provinsi Bengkulu',
      roleFocus: 'Advokasi & Pendampingan Hak Anak',
      highlights: [
        'Terlibat aktif dalam koordinasi program divisi terkait isu perlindungan khusus anak di tingkat provinsi.',
        'Berkolaborasi bersama pengurus lintas divisi dalam menyusun materi edukasi dan kampanye ramah anak.',
        'Menjalankan amanah organisasi dengan komunikasi yang empatik dan penuh tanggung jawab.',
      ],
    },
  },
  {
    id: 'mc-han-2024',
    category: 'event',
    badges: [
      { label: 'EVENT HOSTING', color: 'pink' },
      { label: 'PANITIA ACARA', color: 'yellow' },
    ],
    period: 'JUNI 2024',
    title: 'Panitia Acara & MC Nonformal',
    organization: 'HARI ANAK NASIONAL • FORUM ANAK PROVINSI BENGKULU',
    summary:
      'Dipercaya memandu jalannya acara sebagai Master of Ceremonies (MC) Nonformal pada peringatan Hari Anak Nasional yang diselenggarakan oleh Forum Anak Provinsi Bengkulu.',
    accentLeft: true,
    details: {
      location: 'Provinsi Bengkulu',
      roleFocus: 'Public Speaking & Manajemen Alur Acara',
      highlights: [
        'Memandu sesi nonformal pada rangkaian peringatan Hari Anak Nasional agar suasana tetap hangat dan interaktif.',
        'Berkoordinasi dengan panitia acara dan pengisi panggung untuk menjaga ketepatan rundown kegiatan.',
        'Membangun keterlibatan audiens muda dari berbagai daerah secara komunikatif dan adaptif.',
      ],
    },
  },
  {
    id: 'humas-temu-2023',
    category: 'humas',
    badges: [{ label: 'HUMAS & KOMUNIKASI', color: 'sage' }],
    period: 'JUNI 2023',
    title: 'Panitia Humas — Temu Forum Anak Bengkulu',
    organization: 'FORUM ANAK PROVINSI BENGKULU',
    summary:
      'Bertanggung jawab mendata kehadiran delegasi serta menjembatani komunikasi aktif dengan perwakilan anak tingkat kabupaten di seluruh Provinsi Bengkulu.',
    details: {
      location: 'Provinsi Bengkulu',
      roleFocus: 'Hubungan Masyarakat & Koordinasi Delegasi',
      highlights: [
        'Melakukan pendataan kehadiran serta konfirmasi administrasi delegasi tingkat kabupaten se-Provinsi Bengkulu.',
        'Menjadi penghubung informasi utama antara panitia penyelenggara dan perwakilan daerah.',
        'Memastikan alur komunikasi peserta berjalan tertib sebelum hingga selama kegiatan berlangsung.',
      ],
    },
  },
];

export const INTEREST_ITEMS: InterestItem[] = [
  {
    id: 'music',
    title: 'Music',
    subtitle: 'SOUND & MOOD',
    tiltClass: 'hover:-rotate-2',
    description:
      'Mendengarkan musik menjadi ruang jeda di sela aktivitas perkuliahan Sistem Informasi dan kegiatan organisasi—membantu menjaga fokus, suasana hati, serta ritme berpikir kreatif.',
    themes: ['Daily Study Soundtrack', 'Mood & Reflection', 'Acoustic & Contemporary Vibes'],
    whyItMatters:
      'Musik melatih kepekaan ritme dan nuansa, mendukung ketenangan saat menganalisis materi maupun mempersiapkan penampilan komunikasi publik.',
  },
  {
    id: 'movies',
    title: 'Movies',
    subtitle: 'STORIES & CINEMA',
    tiltClass: 'hover:rotate-2',
    description:
      'Menonton film adalah cara menikmati penceritaan visual, memahami beragam perspektif karakter, serta menggali inspirasi tentang komunikasi manusia dan dinamika sosial.',
    themes: ['Visual Storytelling', 'Character Perspectives', 'Creative Inspiration'],
    whyItMatters:
      'Memahami alur cerita dan empati karakter turut memperkaya cara menyampaikan pesan saat berkolaborasi maupun memandu acara.',
  },
];
