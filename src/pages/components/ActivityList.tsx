import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Activity } from '@src/pages/components/Activity';
import { ActivityListSchema, ActivitySchema } from '@src/types/Activity';
import React from 'react';

export const ActivityList = () => {
  const activities: ActivityListSchema = {
    head: 'Activities',
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
    <Box sx={{ my: 8 }}>
      <Typography variant="h5" component="div" sx={{ mb: 5 }} align="center">
        {activities.head}
      </Typography>

      <Grid container spacing={5} rowSpacing={2} justifyContent="center">
        {activities.items.map((item: ActivitySchema, idx: number) => (
          <Grid key={idx} xs={10} md={4}>
            <Activity activity={item.activity} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
