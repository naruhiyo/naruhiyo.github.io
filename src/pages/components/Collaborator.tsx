import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { CollaboratorSchema } from '@src/types/Collaborator';
import React from 'react';

export const Collaborator = (props: CollaboratorSchema) => {
  const collaborator = props.collaborator;

  return (
    <Card sx={{ height: 350 }}>
      <CardMedia component="img" height="200" image={collaborator.image} alt="collaborator-icon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {collaborator.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {collaborator.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" href={collaborator.link.portfolio} target="_blank" size="small">
          Portfolio
        </Button>
        <Button variant="outlined" href={collaborator.link.atcoder} target="_blank" size="small">
          AtCoder
        </Button>
        <Button variant="outlined" href={collaborator.link.github} target="_blank" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
};
