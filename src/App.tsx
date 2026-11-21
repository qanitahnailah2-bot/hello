/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HeroSection } from './components/HeroSection';
import { InterestsSection } from './components/InterestsSection';
import { Navbar } from './components/Navbar';

const SECTION_IDS = ['hero', 'about', 'education', 'experience', 'interests', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1C1A1A] p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col gap-6 sm:gap-8 md:gap-10">
        <Navbar activeSection={activeSection} />

        <main className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <InterestsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
