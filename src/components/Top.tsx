import Box from '@mui/material/Box';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CollaboratorList } from './CollaboratorList';
const grommetCustomStyle = {
  global: {},
  image: {
    extend: `width: 100%;`
  },
  box: {}
};

const Top = () => {
  const { t } = useTranslation();
  const products: {
    head: string;
    items: [];
  } = t('products');

  const contact: {
    head: string;
    message: string;
  } = t('contact');
  const activities: {
    head: string;
    items: [];
  } = t('activities');

  // const productList = products.items.map((item: any, idx: number) => (
  //   <ResponsiveContext.Consumer key={idx}>
  //     {(size) => <Product product={item.product} key={idx} id={idx} size={size} />}
  //   </ResponsiveContext.Consumer>
  // ));

  // const activityList = activities.items.map((item: any, idx: number) => (
  //   <ResponsiveContext.Consumer key={idx}>
  //     {(size) => <Activity activity={item.activity} key={idx} id={idx} size={size} />}
  //   </ResponsiveContext.Consumer>
  // ));

  return (
    <Box>
      <CollaboratorList />
    </Box>
  );

  // // <Grommet theme={grommetCustomStyle} full>
  // //   <ResponsiveContext.Consumer>
  // //     {(size) => (
  // //       <Box>
  //         {/* <Box pad="medium" margin={{ bottom: size }}>
  //           <Heading level="3">{collaborators.head}</Heading>
  //           <Grid
  //             columns={{
  //               count: 'fill',
  //               size: 'medium'
  //             }}
  //             gap={size}
  //           >
  //             {collaboratorList}
  //           </Grid>
  //         </Box> */}

  //         {/* <Box background="light-1">
  //           <Box pad={size} margin={{ bottom: size }}>
  //             <Heading level="3">{products.head}</Heading>
  //             <Grid
  //               columns={{
  //                 count: 'fill',
  //                 size: size
  //               }}
  //               gap="small"
  //             >
  //               {productList}
  //             </Grid>
  //           </Box>
  //         </Box> */}

  //         {/* <Box background="light-1">
  //           <Box pad={size} margin={{ bottom: size }}>
  //             <Heading level="3">{activities.head}</Heading>
  //             <Grid
  //               columns={{
  //                 count: 'fill',
  //                 size: size
  //               }}
  //               gap="small"
  //             >
  //               {activityList}
  //             </Grid>
  //           </Box>
  //         </Box> */}
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

export default Top;
