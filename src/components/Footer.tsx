import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import sal from "@/assets/anpc-sal.png";
import sol from "@/assets/anpc-sol.png";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks: { href: string; label: string }[] = [
    { href: "#about", label: t.footer.links.about },
    { href: "#trainers", label: t.footer.links.trainers },
    { href: "#pictures", label: t.footer.links.pictures },
    { href: "#testimonials", label: t.footer.links.testimonials },
    { href: "#app", label: t.footer.links.app },
    { href: "#pricing", label: t.footer.links.pricing },
    { href: "#contact", label: t.footer.links.contact },
  ];

  return (
    <footer className="relative bg-ink text-bone border-t border-line overflow-hidden">
      {/* oversized wordmark */}
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 pt-16">
        <p
          aria-hidden
          className="font-display leading-[0.85] text-[17.5vw] select-none text-ghost hover:text-ghost-red transition-all duration-700 text-center"
        >
          FOCUS&nbsp;GYM
        </p>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-3xl mb-5">
              Focus <span className="text-blood">Gym</span>
            </h3>
            <p className="text-bone/50 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-bone/40 mb-6">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-grow text-bone/70 hover:text-bone transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-center gap-5">
            <img
              src={sal}
              alt="ANPC SAL"
              className="h-[62px] w-auto object-contain"
            />
            <img
              src={sol}
              alt="ANPC SOL"
              className="h-[65px] w-auto object-contain"
            />
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-bone/40 mb-6">
              {t.footer.follow}
            </h4>
            <div className="flex gap-4 mb-10">
              <a
                href="https://www.facebook.com/profile.php?id=100064196705579"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 border border-line hover:border-blood hover:bg-blood flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/focusgymsepsi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 border border-line hover:border-blood hover:bg-blood flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-bone/40 mb-4">
              {t.footer.termsTitle}
            </h4>
            <p className="text-bone/50 text-sm leading-relaxed">
              {t.footer.termsTextPre}{" "}
              <Link
                to="/terms"
                className="text-blood hover:text-bone transition-colors"
              >
                {t.footer.termsLink}
              </Link>{" "}
              {t.footer.termsAnd}{" "}
              <Link
                to="/privacy"
                className="text-blood hover:text-bone transition-colors"
              >
                {t.footer.privacyLink}
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="border-t border-line mt-14 pt-8 text-center text-bone/40 text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
