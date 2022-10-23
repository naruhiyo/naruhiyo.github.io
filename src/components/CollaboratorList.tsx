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
    <Grid container spacing={2}>
      {collaborators.items.map((item: CollaboratorSchema, idx: number) => (
        <Grid key={idx} xs={4} md={3}>
          <Collaborator collaborator={item.collaborator} />
        </Grid>
      ))}
    </Grid>
  );
};
