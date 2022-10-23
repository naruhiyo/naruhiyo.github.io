import Container from '@mui/material/Container';
import { ActivityList } from '@src/components/ActivityList';
import { CollaboratorList } from '@src/components/CollaboratorList';
import { Contact } from '@src/components/Contact';
import { ProductList } from '@src/components/ProductList';
import React from 'react';

export const Top = () => {
  return (
    <Container>
      <CollaboratorList />
      <ProductList />
      <ActivityList />
      <Contact />
    </Container>
  );
};
