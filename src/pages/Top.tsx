import { Card, CardMedia } from '@mui/material';
import Container from '@mui/material/Container';
import { ActivityList } from '@src/components/ActivityList';
import { CollaboratorList } from '@src/components/CollaboratorList';
import { Contact } from '@src/components/Contact';
import { ProductList } from '@src/components/ProductList';
import React from 'react';

export const Top = () => {
  return (
    <Container>
      <Card sx={{ height: 300 }} elevation={0}>
        <CardMedia component="img" height="300" image="/images/top.png" alt="top-image" />
      </Card>

      <CollaboratorList />
      <ProductList />
      <ActivityList />
      <Contact />
    </Container>
  );
};
