import Footer from '@src/components/Footer';
import Header from '@src/components/Header';
import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Top = lazy(() => import('@src/pages/Top').then((m) => ({ default: m.Top })));
const CollaboratorsPage = lazy(() =>
  import('@src/pages/Collaborators').then((m) => ({ default: m.CollaboratorsPage }))
);
const ProductsPage = lazy(() => import('@src/pages/Products').then((m) => ({ default: m.ProductsPage })));
const ActivityPage = lazy(() => import('@src/pages/Activities').then((m) => ({ default: m.ActivityPage })));
const ContactPage = lazy(() => import('@src/pages/ContactPage').then((m) => ({ default: m.ContactPage })));

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
          <Suspense fallback={<div className="page-loading" aria-label="Loading" />}>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/collaborators" element={<CollaboratorsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/activities" element={<ActivityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
