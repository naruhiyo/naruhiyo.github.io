import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

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
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body2" align="center" sx={{ flexGrow: 1 }}>
          &copy; {footer.copyright}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
