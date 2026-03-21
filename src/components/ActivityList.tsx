import { Activity } from '@src/components/Activity';
import { GenericList } from '@src/components/GenericList';
import { ACTIVITIES_DATA } from '@src/data/activities';
import { ActivitySchema } from '@src/types/Activity';

export const ActivityList = () => (
  <GenericList<ActivitySchema>
    label={ACTIVITIES_DATA.head}
    items={ACTIVITIES_DATA.items}
    renderItem={(item) => <Activity activity={item.activity} />}
    keyExtractor={(item) => item.activity.github}
  />
);
