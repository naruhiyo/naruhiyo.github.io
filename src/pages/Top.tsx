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

  // // <Grommet theme={grommetCustomStyle} full>
  // //   <ResponsiveContext.Consumer>
  // //     {(size) => (
  // //       <Box>
  //         {/*
  //         <Box pad={size} margin={{ bottom: size }}>
  //           <Heading level="3">{contact.head}</Heading>

  //           <Text textAlign="center" alignSelf="center" margin={{ vertical: size }} size="xsmall">
  //             <Markdown>{contact.message}</Markdown>
  //           </Text>
  //         </Box> */}
  //       {/* </Box>
  //     )}
  //   </ResponsiveContext.Consumer>
  // </Grommet> */}
};
