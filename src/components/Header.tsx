import { changeLocale } from '@src/i18n';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

const NAVIGATION = [
  { key: 'home', path: '/', end: true },
  { key: 'members', path: '/collaborators' },
  { key: 'products', path: '/products' },
  { key: 'activities', path: '/activities' },
  { key: 'contact', path: '/contact' }
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(location.pathname !== '/');
  const pathnameRef = useRef(location.pathname);

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

  const toggleLocale = () => {
    changeLocale(i18n.language === 'en' ? 'ja' : 'en');
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
        <button type="button" className="lang-toggle" onClick={toggleLocale} aria-label={t('header.langToggle')}>
          <span className={i18n.language === 'ja' ? 'active' : ''}>JA</span>
          <span aria-hidden="true" className="lang-divider">
            /
          </span>
          <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
