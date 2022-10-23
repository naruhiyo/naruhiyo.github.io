import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

export type CollaboratorSchema = {
  collaborator: {
    name: string;
    image: string;
    bio: string;
    link: {
      github: string;
      portfolio: string;
      atcoder: string;
    };
  };
};

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
