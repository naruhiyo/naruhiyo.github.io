import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';

export type ContactSchema = {
  head: string;
  message: string;
};

export const Contact = () => {
  const { t } = useTranslation();
  const contact: ContactSchema = t('contact') as ContactSchema;

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.head}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contact.message}
        </Typography>
      </CardContent>
    </Card>
  );
};
