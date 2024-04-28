import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Collaborator } from '@src/components/Collaborator';
import { CollaboratorListSchema, CollaboratorSchema } from '@src/types/Collaborator';
import React from 'react';

export const CollaboratorList = () => {
  const collaborators: CollaboratorListSchema = {
    head: 'Collaborators',
    items: [
      {
        collaborator: {
          name: '@narugit',
          image: 'images/narugit.png',
          bio: 'グルメエンジニア',
          link: {
            github: 'https://github.com/narugit',
            portfolio: 'https://narugit.github.io/',
            atcoder: 'https://atcoder.jp/users/narucode'
          }
        }
      },
      {
        collaborator: {
          name: '@aecomet',
          image: 'images/aecomet.png',
          bio: 'ひよこエンジニア',
          link: {
            github: 'https://github.com/aecomet',
            portfolio: 'https://aecomet.github.io',
            atcoder: 'https://atcoder.jp/users/ae_aecomet'
          }
        }
      }
    ]
  };

  return (
    <Box sx={{ mt: 5, mb: 8 }}>
      <Typography variant="h5" component="div" sx={{ mb: 5 }} align="center">
        {collaborators.head}
      </Typography>

      <Grid container spacing={5} rowSpacing={2} justifyContent="center">
        {collaborators.items.map((item: CollaboratorSchema, idx: number) => (
          <Grid key={idx} xs={10} md={3}>
            <Collaborator collaborator={item.collaborator} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
