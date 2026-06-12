import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap, EASE_OUT } from "@/lib/gsap";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";
import logo from "@/assets/redLogoWithoutBg.jpg";

const SECTION_IDS = [
  "about",
  "trainers",
  "pictures",
  "testimonials",
  "app",
  "pricing",
  "contact",
] as const;

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`flex items-center border border-line text-xs font-bold tracking-[0.2em] ${className}`}
    >
      {(["ro", "hu"] as Language[]).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-3 py-2 uppercase transition-colors duration-300 ${
            lang === code
              ? "bg-blood text-bone"
              : "text-bone/50 hover:text-bone"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // animate mobile menu items in
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.from(menuRef.current.querySelectorAll("[data-menu-item]"), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: EASE_OUT,
        stagger: 0.06,
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const labels: Record<(typeof SECTION_IDS)[number], string> = {
    about: t.nav.about,
    trainers: t.nav.trainers,
    pictures: t.nav.pictures,
    testimonials: t.nav.testimonials,
    app: t.nav.app,
    pricing: t.nav.pricing,
    contact: t.nav.contact,
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-line"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex items-center justify-between h-20">
            <img
              src={logo}
              alt="Focus Gym Logo"
              className="h-[96px] w-auto object-contain cursor-pointer mix-blend-screen"
              onClick={handleLogoClick}
            />

            <div className="hidden lg:flex items-center gap-8">
              {SECTION_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="link-grow text-bone/80 hover:text-bone text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-200"
                >
                  {labels[id]}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <LanguageToggle />
              <button
                onClick={() => scrollToSection("app")}
                className="btn-blood font-display text-sm tracking-[0.15em] px-6 py-3"
              >
                {t.nav.cta}
              </button>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <LanguageToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                className="relative h-10 w-10 flex flex-col items-center justify-center gap-[7px]"
              >
                <span
                  className={`block h-[2px] w-7 bg-bone transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-[4.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-7 bg-bone transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* full-screen mobile menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-ink/[0.98] backdrop-blur-lg flex flex-col justify-center px-8 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {isMenuOpen && (
          <div className="flex flex-col gap-2">
            {SECTION_IDS.map((id, i) => (
              <button
                key={id}
                data-menu-item
                onClick={() => scrollToSection(id)}
                className="group flex items-baseline gap-4 text-left"
              >
                <span className="text-blood font-body text-xs tracking-[0.3em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl sm:text-5xl text-bone group-hover:text-blood transition-colors duration-300">
                  {labels[id]}
                </span>
              </button>
            ))}
            <button
              data-menu-item
              onClick={() => scrollToSection("app")}
              className="btn-blood font-display text-lg tracking-[0.15em] px-8 py-4 mt-8 self-start"
            >
              {t.nav.cta}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;
