import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FooterSchema } from '@src/types/Footer';
import React from 'react';

const Footer = () => {
  const footer: FooterSchema = {
    copyright: 'narugit and hiyoko3'
  };

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
