import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

type FooterSchema = {
  copyright: string;
};

const Footer = () => {
  const { t } = useTranslation();
  const footer: FooterSchema = t('footer') as FooterSchema;

  return (
    <Typography variant="body2" align="center">
      &copy; {footer.copyright}
    </Typography>
  );
};

export default Footer;
