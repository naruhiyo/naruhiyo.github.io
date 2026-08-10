import { changeLocale } from '@src/i18n';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

const NAVIGATION = [
  { key: 'home', path: '/', end: true },
  { key: 'members', path: '/collaborators' },
  { key: 'products', path: '/products' },
  { key: 'activities', path: '/activities' },
  { key: 'contact', path: '/contact' }
];

const LANG_OPTIONS = [
  { value: 'ja', label: '日本語' },
  { value: 'en', label: 'English' }
] as const;

type LangCode = (typeof LANG_OPTIONS)[number]['value'];

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(location.pathname !== '/');
  const pathnameRef = useRef(location.pathname);
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pathnameRef.current = location.pathname;
    if (location.pathname !== '/') {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 40);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (pathnameRef.current !== '/') return;
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const onClickOutside = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', onClickOutside);

    return () => {
      document.removeEventListener('pointerdown', onClickOutside);
    };
  }, []);

  const currentIndex = () =>
    Math.max(
      0,
      LANG_OPTIONS.findIndex((o) => o.value === i18n.language)
    );
  const currentLabel = LANG_OPTIONS.find((o) => o.value === i18n.language)?.label ?? '日本語';

  const toggle = () => {
    if (!open) {
      setHighlightIndex(currentIndex());
    }
    setOpen(!open);
  };

  const selectLang = (lang: LangCode) => {
    if (i18n.language !== lang) {
      changeLocale(lang);
    }
    setOpen(false);
  };

  const moveHighlight = (delta: number) => {
    setHighlightIndex((i) => (i + delta + LANG_OPTIONS.length) % LANG_OPTIONS.length);
  };

  const onTriggerKeydown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlightIndex(currentIndex());
      } else {
        moveHighlight(e.key === 'ArrowDown' ? 1 : -1);
      }
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlightIndex(currentIndex());
      } else {
        selectLang(LANG_OPTIONS[highlightIndex].value);
      }
    }
  };

  return (
    <header className={`site-nav${isScrolled ? ' scrolled' : ''}`}>
      <NavLink className="nav-logo" to="/" end>
        <img src="/images/brand-logo.png" alt="NaruHiyo" className="nav-logo-img" />
      </NavLink>

      <div className="nav-area">
        <nav aria-label={t('header.navAriaLabel')}>
          <ul className="nav-links">
            {NAVIGATION.map((item) => (
              <li key={item.path}>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} end={item.end}>
                  {t(`header.${item.key}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`lang-select${open ? ' open' : ''}`} ref={rootRef}>
          <button
            type="button"
            className="lang-trigger"
            aria-expanded={open}
            aria-haspopup="listbox"
            aria-label={t('header.langToggle')}
            onClick={toggle}
            onKeyDown={onTriggerKeydown}
          >
            {currentLabel}
          </button>
          {open && (
            <ul
              className="lang-menu"
              role="listbox"
              aria-label={t('header.langToggle')}
              aria-activedescendant={`lang-opt-${highlightIndex}`}
            >
              {LANG_OPTIONS.map((opt, i) => (
                <li
                  key={opt.value}
                  id={`lang-opt-${i}`}
                  role="option"
                  aria-selected={i18n.language === opt.value}
                  className={`${i18n.language === opt.value ? 'active' : ''}${i === highlightIndex ? ' highlight' : ''}`}
                  onClick={() => selectLang(opt.value)}
                  onMouseEnter={() => setHighlightIndex(i)}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
