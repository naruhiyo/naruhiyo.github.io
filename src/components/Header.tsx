import Box from '@mui/material/Box';
import { HeaderSchema } from '@src/types/Header';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(location.pathname !== '/');

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
    const updateScrolledState = () => {
      if (location.pathname !== '/') {
        setIsScrolled(true);
        return;
      }

      setIsScrolled(window.scrollY > 40);
    };

    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrolledState);
    };
  }, [location.pathname]);

  return (
    <Box component="header" className={`site-nav${isScrolled ? ' scrolled' : ''}`}>
      <NavLink className="nav-logo" to="/" end>
        <img src="/images/brand-logo.png" alt={header.shortTitle} className="nav-logo-img" />
      </NavLink>

      <Box component="nav" aria-label="primary navigation">
        <ul className="nav-links">
          {header.navigation.map((item) => (
            <li key={item.path}>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Header;
