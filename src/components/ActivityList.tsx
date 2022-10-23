import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Activity, ActivitySchema } from '@src/components/Activity';
import React from 'react';
import { useTranslation } from 'react-i18next';

type ActivityListSchema = {
  head: string;
  items: ActivitySchema[];
};

export const ActivityList = () => {
  const { t } = useTranslation();

  const activities: ActivityListSchema = t('activities') as ActivityListSchema;

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
