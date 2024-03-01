import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ActivitySchema } from '@src/types/Activity';
import React from 'react';

export const Activity = (props: ActivitySchema) => {
  const activity = props.activity;

  return (
    <Card sx={{ height: 200 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activity.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {activity.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" href={activity.github} target="_blank" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
};
