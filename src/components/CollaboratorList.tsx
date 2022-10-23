import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Collaborator, CollaboratorSchema } from '@src/components/Collaborator';
import React from 'react';
import { useTranslation } from 'react-i18next';

type collaboratorListSchema = {
  head: string;
  items: CollaboratorSchema[];
};

export const CollaboratorList = () => {
  const { t } = useTranslation();

  const collaborators: collaboratorListSchema = t('collaborators') as collaboratorListSchema;

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="div">
        {collaborators.head}
      </Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {collaborators.items.map((item: CollaboratorSchema, idx: number) => (
          <Grid key={idx} xs={12} md={3}>
            <Collaborator collaborator={item.collaborator} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
