import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Product } from '@src/pages/components/Product';
import { ProductListSchema, ProductSchema } from '@src/types/Product';
import React from 'react';

export const ProductList = () => {
  const products: ProductListSchema = {
    head: 'Products',
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
    <Box sx={{ my: 8 }}>
      <Typography variant="h5" component="div" sx={{ mb: 5 }} align="center">
        {products.head}
      </Typography>

      <Grid container spacing={3} rowSpacing={2} justifyContent="center">
        {products.items.map((item: ProductSchema, idx: number) => (
          <Grid key={idx} xs={10} md={4}>
            <Product product={item.product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
