import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { id: 'about', name: 'About' },
    { id: 'capabilities', name: 'Capabilities' },
    { id: 'projects', name: 'Projects' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'deep-dives', name: 'Deep Dives' },
    { id: 'ai-lab', name: 'AI Lab', highlight: true },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ];

  // Scroll listener for background blur & Active Section Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy calculation
      const sectionIds = ['hero', ...navLinks.map(l => l.id)];
      const scrollPos = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Programmatic Smooth Scroll with offset for fixed header
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without jumping
      history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-2.5 sm:py-3 shadow-subtle'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')}
          className="flex items-center gap-2 sm:gap-2.5 group shrink-0 cursor-pointer"
          aria-label="Rohit Singh - Return to top"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-graphite-950 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider group-hover:bg-accent-blue transition-colors shadow-subtle">
            RS
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm sm:text-base text-graphite-950 tracking-tight leading-tight group-hover:text-accent-blue transition-colors">
              Rohit Singh
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-graphite-500 uppercase tracking-technical leading-none">
              SDE · AI & Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 sm:gap-1.5 p-1 bg-white/70 backdrop-blur-md rounded-full border border-slate-200/80 shadow-subtle px-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold bg-graphite-950 shadow-sm'
                    : link.highlight
                    ? 'text-accent-blue font-bold hover:bg-blue-50'
                    : 'text-graphite-600 hover:text-graphite-950 hover:bg-slate-100'
                }`}
              >
                {link.name}
                {link.highlight && !isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-blue ml-1.5 align-middle animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="./assets/Rohit_Singh_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-graphite-700 hover:text-graphite-950 hover:bg-slate-100 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-accent-blue" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-graphite-950 hover:bg-graphite-900 active:scale-[0.98] text-white text-xs font-mono font-medium transition-all shadow-subtle cursor-pointer"
          >
            <span>Let's Connect</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="xl:hidden p-2 rounded-xl text-graphite-700 hover:text-graphite-950 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[52px] sm:top-[60px] bottom-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`flex items-center justify-between text-base font-mono py-3 px-3 rounded-xl transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-graphite-950 text-white font-bold'
                      : link.highlight 
                      ? 'text-accent-blue font-bold bg-accent-blue/10 border border-accent-blue/20' 
                      : 'text-graphite-800 hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.highlight && <Sparkles className="w-3.5 h-3.5" />}
                  </span>
                  <span className={`text-xs font-mono ${isActive ? 'text-white' : 'text-graphite-400'}`}>›</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <a
              href="./assets/Rohit_Singh_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 text-sm font-mono text-graphite-800 bg-slate-50 hover:bg-slate-100 active:scale-[0.99] transition-all"
            >
              <FileText className="w-4 h-4 text-accent-blue" />
              <span>Download CV (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center justify-center py-3.5 px-4 rounded-xl bg-graphite-950 text-white text-sm font-mono font-medium hover:bg-graphite-900 active:scale-[0.99] transition-all shadow-card cursor-pointer"
            >
              Initiate Direct Transmission
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
