import { FooterSchema } from '@src/types/Footer';

const Footer = () => {
  const footer: FooterSchema = {
    copyright: '© narugit and aecomet — NaruHiyo'
  };

  return (
    <footer className="site-footer">
      <p className="contact-footer">{footer.copyright}</p>
    </footer>
  );
};

export default Footer;
