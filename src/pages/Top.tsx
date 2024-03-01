import Container from '@mui/material/Container';
import { ActivityList } from '@src/pages/components/ActivityList';
import { CollaboratorList } from '@src/pages/components/CollaboratorList';
import { Contact } from '@src/pages/components/Contact';
import { ProductList } from '@src/pages/components/ProductList';
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
