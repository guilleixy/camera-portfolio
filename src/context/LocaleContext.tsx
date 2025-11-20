"use client";
import React, { createContext, useContext, useState } from "react";

type LocaleContextType = {
  locale: string;
  toggleLanguage?: (language: any) => void;
};

const LocaleContextDefaultValues: LocaleContextType = {
  locale: "en",
};

const LocaleContext = createContext<LocaleContextType>(
  LocaleContextDefaultValues
);

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: string;
}) {
  const [locale, setLocale] = useState(initialLocale);

  const toggleLanguage = (language: string) => {
    setLocale(language);
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLanguage = () => useContext(LocaleContext);
