import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { ContactSchema } from '@src/types/Contact';
import React from 'react';

export const Contact = () => {
  const contact: ContactSchema = {
    head: 'Contact us',
    message: '`***@gmail.com` \n\n `***` には ***naruhiyo.apps*** と入力してください。'
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="div">
        {contact.head}
      </Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid xs={12} md={12}>
          <Card sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {contact.message}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
