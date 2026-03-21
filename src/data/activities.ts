import { ActivityListSchema } from '@src/types/Activity';

export const ACTIVITIES_DATA: ActivityListSchema = {
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
