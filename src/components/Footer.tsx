import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <p className="contact-footer">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
