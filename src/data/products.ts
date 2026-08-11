import { ProductListSchema } from '@src/types/Product';

export const PRODUCTS_DATA: ProductListSchema = {
  head: 'products.head',
  items: [
    {
      product: {
        order: '01',
        name: 'Memoma',
        tag: 'products.tags.desktopApp',
        desc: 'products.items.memoma.desc',
        github: 'https://github.com/naruhiyo/Memoma',
        image: '/images/memoma.gif',
        video: '/images/memoma.mp4'
      }
    },
    {
      product: {
        order: '02',
        name: 'Partytion',
        tag: 'products.tags.iosApp',
        desc: 'products.items.partytion.desc',
        github: 'https://github.com/naruhiyo/partytion',
        image: '/images/partytion.gif',
        video: '/images/partytion.mp4'
      }
    },
    {
      product: {
        order: '03',
        name: 'aman',
        tag: 'products.tags.cliTool',
        desc: 'products.items.aman.desc',
        github: 'https://github.com/naruhiyo/aman',
        image: '/images/aman.gif',
        video: '/images/aman.mp4'
      }
    },
    {
      product: {
        order: '04',
        name: 'appetizer',
        tag: 'products.tags.vscodeExtension',
        desc: 'products.items.appetizer.desc',
        github: 'https://github.com/naruhiyo/appetizer',
        image: '/images/appetizer.gif',
        video: '/images/appetizer.mp4'
      }
    },
    {
      product: {
        order: '05',
        name: 'Net Doctor',
        tag: 'products.tags.networkTool',
        desc: 'products.items.netDoctor.desc',
        github: 'https://github.com/naruhiyo/net_doctor',
        image: '/images/net-doctor.gif',
        video: '/images/net-doctor.mp4'
      }
    },
    {
      product: {
        order: '06',
        name: 'Life Timeline',
        tag: 'products.tags.webService',
        desc: 'products.items.lifeTimeline.desc',
        github: 'https://github.com/naruhiyo/life-timeline',
        image: '/images/life-timeline.gif',
        video: '/images/life-timeline.mp4'
      }
    }
  ]
};
