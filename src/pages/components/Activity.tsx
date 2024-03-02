import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
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
