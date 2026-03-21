import { Activity } from '@src/components/Activity';
import { ACTIVITIES_DATA } from '@src/data/activities';
import { ActivitySchema } from '@src/types/Activity';

export const ActivityList = () => {
  return (
    <section aria-label={ACTIVITIES_DATA.head}>
      {ACTIVITIES_DATA.items.map((item: ActivitySchema) => (
        <Activity key={item.activity.github} activity={item.activity} />
      ))}
    </section>
  );
};
