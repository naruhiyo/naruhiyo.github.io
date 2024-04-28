import { Box, Container, Typography } from '@mui/material';
import { FooterSchema } from '@src/types/Footer';
import React from 'react';

const Footer = () => {
  const footer: FooterSchema = {
    copyright: 'narugit and aecomet'
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto'
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          &copy; {footer.copyright}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
