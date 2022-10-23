import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { Product, ProductSchema } from '@src/components/Product';
import React from 'react';
import { useTranslation } from 'react-i18next';
type ProductListSchema = {
  head: string;
  items: ProductSchema[];
};

export const ProductList = () => {
  const { t } = useTranslation();

  const products: ProductListSchema = t('products') as ProductListSchema;

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