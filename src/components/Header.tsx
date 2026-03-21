import { HeaderSchema } from '@src/types/Header';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(location.pathname !== '/');
  const pathnameRef = useRef(location.pathname);

  const header: HeaderSchema = {
    shortTitle: 'NH',
    navigation: [
      { label: 'Home', path: '/', end: true },
      { label: 'Members', path: '/collaborators' },
      { label: 'Products', path: '/products' },
      { label: 'Activities', path: '/activities' },
      { label: 'Contact', path: '/contact' }
    ]
  };

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

  return (
    <header className={`site-nav${isScrolled ? ' scrolled' : ''}`}>
      <NavLink className="nav-logo" to="/" end>
        <img src="/images/brand-logo.png" alt={header.shortTitle} className="nav-logo-img" />
      </NavLink>

      <nav aria-label="primary navigation">
        <ul className="nav-links">
          {header.navigation.map((item) => (
            <li key={item.path}>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
