import { PageHeader } from '@src/components/PageHeader';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="page page-section page-notfound">
      <div className="page-container">
        <PageHeader
          number="404"
          label={t('notfound.label')}
          title={t('notfound.title')}
          emphasis={t('notfound.emphasis')}
        />
        <p className="notfound-message">{t('notfound.message')}</p>
        <Link className="btn-outline" to="/">
          {t('notfound.back')}
        </Link>
      </div>
    </section>
  );
};
