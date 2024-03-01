import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Product } from '@src/pages/components/Product';
import { ProductListSchema, ProductSchema } from '@src/types/Product';
import React from 'react';

export const ProductList = () => {
  const products: ProductListSchema = {
    head: '作ったもの',
    items: [
      {
        product: {
          name: 'Memoma',
          image: 'images/memoma.gif',
          desc: 'Electronを利用したクロスプラットフォーム対応の3カラム型メモアプリ。Markdown記法に対応',
          github: 'https://github.com/naruhiyo/Memoma'
        }
      },
      {
        product: {
          name: 'Partytion',
          image: 'images/partytion.gif',
          desc: '飲み会でのミニゲームとして使えるiPhoneアプリ',
          github: 'https://github.com/naruhiyo/partytion'
        }
      },
      {
        product: {
          name: 'aman',
          image: 'images/aman.gif',
          desc: '`man`コマンドからコマンドのオプションを検索して出力してくれるCLI',
          github: 'https://github.com/naruhiyo/aman'
        }
      },
      {
        product: {
          name: 'appetizer',
          image: 'images/appetizer.gif',
          desc: '昼食や夕食の時間帯に指定された駅の近くにある飲食店を紹介してくれるVS Code拡張',
          github: 'https://github.com/naruhiyo/appetizer'
        }
      },
      {
        product: {
          name: 'Net Doctor',
          image: 'images/net-doctor.gif',
          desc: '接続しているネットワークに異常がないかを診断するアプリ',
          github: 'https://github.com/naruhiyo/net_doctor'
        }
      }
    ]
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h5" component="div">
        {products.head}
      </Typography>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {products.items.map((item: ProductSchema, idx: number) => (
          <Grid key={idx} xs={12} md={3}>
            <Product product={item.product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
