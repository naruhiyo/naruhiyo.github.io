import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ContactSchema } from '@src/types/Contact';
import React from 'react';

export const Contact = () => {
  const contact: ContactSchema = {
    head: 'Contact us',
    message: '***@gmail.com \n\n *** には ***naruhiyo.apps*** と入力してください。'
  };

  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h5" component="div" sx={{ mb: 5 }} align="center">
        {contact.head}
      </Typography>

      <Grid container spacing={5} rowSpacing={2} justifyContent="center">
        <Grid size={{ xs: 10, md: 10 }}>
          <Typography variant="body1" component="p" align="center" style={{ whiteSpace: 'pre-line' }}>
            {contact.message}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
