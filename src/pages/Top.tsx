import { Link } from 'react-router-dom';

export const Top = () => {
  return (
    <section className="page page-home">
      <section className="hero">
        <div className="hero-ring"></div>
        <div className="hero-ring"></div>
        <div className="hero-ring"></div>

        <p className="hero-eyebrow">Gourmet × Technology × Business</p>
        <h1 className="hero-title">
          Naru<em>Hiyo</em>
        </h1>
        <p className="hero-subtitle">美食とビジネスの交差点で、新たな価値を創造する</p>
        <div className="hero-cta">
          <Link className="btn-outline" to="/collaborators">
            Explore
          </Link>
        </div>
      </section>
    </section>
  );
};
