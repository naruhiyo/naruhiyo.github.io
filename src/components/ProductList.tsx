import { Product } from '@src/components/Product';
import { ProductListSchema, ProductSchema } from '@src/types/Product';

export const ProductList = () => {
  const products: ProductListSchema = {
    head: 'Products',
    items: [
      {
        product: {
          order: '01',
          name: 'Memoma',
          tag: 'Desktop App',
          desc: 'Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応。',
          github: 'https://github.com/naruhiyo/Memoma',
          image: '/images/memoma.gif'
        }
      },
      {
        product: {
          order: '02',
          name: 'Partytion',
          tag: 'iOS App',
          desc: '飲み会でのミニゲームとして使えるiPhoneアプリ。宴の場に彩りを。',
          github: 'https://github.com/naruhiyo/partytion',
          image: '/images/partytion.gif'
        }
      },
      {
        product: {
          order: '03',
          name: 'aman',
          tag: 'CLI Tool',
          desc: 'manコマンドからコマンドのオプションを検索して出力してくれるCLIツール。',
          github: 'https://github.com/naruhiyo/aman',
          image: '/images/aman.gif'
        }
      },
      {
        product: {
          order: '04',
          name: 'appetizer',
          tag: 'VS Code Extension',
          desc: '昼食・夕食の時間帯に指定された駅近の飲食店を紹介するVS Code拡張。',
          github: 'https://github.com/naruhiyo/appetizer',
          image: '/images/appetizer.gif'
        }
      },
      {
        product: {
          order: '05',
          name: 'Net Doctor',
          tag: 'Network Tool',
          desc: '接続しているネットワークに異常がないかを診断するアプリ。',
          github: 'https://github.com/naruhiyo/net_doctor',
          image: '/images/net-doctor.gif'
        }
      },
      {
        product: {
          order: '06',
          name: 'Life Timeline',
          tag: 'Web Service',
          desc: '自身の生活に起きた出来事を記録しタイムラインとして閲覧できるWebサービス。',
          github: 'https://github.com/naruhiyo/life-timeline',
          image: '/images/life-timeline.gif'
        }
      }
    ]
  };

  return (
    <section aria-label={products.head} className="product-table">
      {products.items.map((item: ProductSchema) => (
        <Product key={item.product.order} product={item.product} />
      ))}
    </section>
  );
};
