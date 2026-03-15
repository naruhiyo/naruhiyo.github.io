import Box from '@mui/material/Box';
import { FooterSchema } from '@src/types/Footer';
import React from 'react';

const Footer = () => {
  const footer: FooterSchema = {
    copyright: '© narugit and aecomet — NaruHiyo'
  };

  return (
    <Box component="footer" className="site-footer">
      <p className="contact-footer">{footer.copyright}</p>
    </Box>
  );
};

export default Footer;
