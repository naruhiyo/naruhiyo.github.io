import { Activity } from '@src/components/Activity';
import { ActivityListSchema, ActivitySchema } from '@src/types/Activity';

export const ActivityList = () => {
  const activities: ActivityListSchema = {
    head: 'Activities',
    items: [
      {
        activity: {
          name: 'NaruHiyo\n競プロ部',
          body: ['プログラミング能力を向上させるために AtCoder を利用してアルゴリズムを勉強中！'],
          github: 'https://github.com/naruhiyo/algorithm-enhancement',
          stats: [
            { value: '2', label: 'Active Members' },
            { value: '6', label: 'Products Shipped' },
            { value: '∞', label: 'Curiosity' }
          ]
        }
      }
    ]
  };

  return (
    <section aria-label={activities.head}>
      {activities.items.map((item: ActivitySchema) => (
        <Activity key={item.activity.github} activity={item.activity} />
      ))}
    </section>
  );
};
