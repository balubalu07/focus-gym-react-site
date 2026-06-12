import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, Language, TranslationShape } from "./translations";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "focusgym-lang";

const getInitialLang = (): Language => {
  if (typeof window === "undefined") return "ro";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "hu" || stored === "ro" ? stored : "ro";
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLangState] = useState<Language>(getInitialLang);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};
