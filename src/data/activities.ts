import { ActivityListSchema } from '@src/types/Activity';

export const ACTIVITIES_DATA: ActivityListSchema = {
  head: 'activities.head',
  items: [
    {
      activity: {
        name: 'activities.items.club.name',
        body: ['activities.items.club.body'],
        github: 'https://github.com/naruhiyo/algorithm-enhancement',
        stats: [
          { value: '2', label: 'activities.items.club.stats.members' },
          { value: '6', label: 'activities.items.club.stats.shipped' },
          { value: '∞', label: 'activities.items.club.stats.curiosity' }
        ]
      }
    }
  ]
};
