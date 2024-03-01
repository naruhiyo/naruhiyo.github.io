import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProductSchema } from '@src/types/Product';
import React from 'react';

export const Product = (props: ProductSchema) => {
  const product = props.product;

  return (
    <Card sx={{ height: 390 }}>
      <CardMedia component="img" height="200" image={product.image} alt="collaborator-icon" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" href={product.github} target="_blank" size="small">
          Github
        </Button>
      </CardActions>
    </Card>
  );
};
