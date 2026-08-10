import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Top = () => {
  const { t } = useTranslation();

  return (
    <section className="page page-home">
      <section className="hero">
        <div className="hero-ring"></div>
        <div className="hero-ring"></div>
        <div className="hero-ring"></div>

        <p className="hero-eyebrow">{t('top.eyebrow')}</p>
        <h1 className="hero-title">
          Naru<em>Hiyo</em>
        </h1>
        <p className="hero-subtitle">{t('top.subtitle')}</p>
        <div className="hero-cta">
          <Link className="btn-outline" to="/collaborators">
            {t('top.explore')}
          </Link>
        </div>
      </section>
    </section>
  );
};
