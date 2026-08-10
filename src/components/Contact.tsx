import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-panel">
      <div className="contact-bg-text">{t('contact.bgText')}</div>
      <p className="contact-eyebrow">{t('contact.eyebrow')}</p>
      <h2 className="contact-title">{t('contact.title')}</h2>
      <p className="contact-email">{t('contact.email')}</p>
      <p className="contact-note">{t('contact.note')}</p>
    </section>
  );
};
