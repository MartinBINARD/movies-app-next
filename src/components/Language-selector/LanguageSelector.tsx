'use client';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';

import { availableLocales } from '@/utils/i18n';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [currentLanguage]);

  return (
    <div className="relative uppercase">
      <p onClick={() => setIsOpen((currOpen) => !currOpen)} className="cursor-pointer">
        {currentLanguage}
        <span className={`${isOpen ? 'rotate-180' : ''}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </p>
      <ul
        className={`absolute -left-[5px] right-0 top-[35px] z-50 flex origin-top scale-y-0 list-none justify-center overflow-hidden bg-primary pb-[10px] transition-all duration-300 ease-in-out ${isOpen ? 'scale-y-100' : ''}`}
      >
        {availableLocales
          .filter((locale) => locale !== currentLanguage)
          .map((locale) => (
            <li key={locale}>
              <Link href={`/${locale}`}>{locale}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
