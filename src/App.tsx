import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import { ActivityPage } from '@src/pages/Activities';
import { CollaboratorsPage } from '@src/pages/Collaborators';
import { ContactPage } from '@src/pages/ContactPage';
import { ProductsPage } from '@src/pages/Products';
import { Top } from '@src/pages/Top';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const ROUTE_ORDER = ['/', '/collaborators', '/products', '/activities', '/contact'];

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = ROUTE_ORDER.indexOf(location.pathname);

      if (currentIndex === -1) {
        return;
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        const nextPath = ROUTE_ORDER[currentIndex + 1];

        if (nextPath) {
          navigate(nextPath);
        }
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        const previousPath = ROUTE_ORDER[currentIndex - 1];

        if (previousPath) {
          navigate(previousPath);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <div key={location.pathname} className="route-transition">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/collaborators" element={<CollaboratorsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/activities" element={<ActivityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
