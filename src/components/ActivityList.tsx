import { Activity } from '@src/components/Activity';
import { ActivityListSchema, ActivitySchema } from '@src/types/Activity';
import React from 'react';

export const ActivityList = () => {
  const activities: ActivityListSchema = {
    head: 'Activities',
    items: [
      {
        activity: {
          name: 'NaruHiyo\n競プロ部',
          body: [
            'プログラミング能力を向上させるために AtCoder を利用してアルゴリズムを勉強中！',
            '論理的思考とエレガントな解法の追求。ビジネスの課題解決に直結するアルゴリズム的思考力を磨いています。'
          ],
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
