import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Activity } from '@src/pages/components/Activity';
import { ActivityListSchema, ActivitySchema } from '@src/types/Activity';
import React from 'react';

export const ActivityList = () => {
  const activities: ActivityListSchema = {
    head: '活動',
    items: [
      {
        activity: {
          name: 'NaruHiyo 競プロ部',
          desc: 'プログラミング能力を向上させるために AtCdoer を利用してアルゴリズムを勉強中！',
          github: 'https://github.com/naruhiyo/algorithm-enhancement'
        }
      }
    ]
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="div">
        {activities.head}
      </Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {activities.items.map((item: ActivitySchema, idx: number) => (
          <Grid key={idx} xs={12} md={3}>
            <Activity activity={item.activity} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
