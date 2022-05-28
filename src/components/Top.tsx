import Activity from '@src/components/Activity'
import Collaborator from '@src/components/Collaborator'
import Footer from '@src/components/layouts/Footer'
import Header from '@src/components/layouts/Header'
import Product from '@src/components/Product'
import { Box, Grid, Grommet, Heading, Image, Markdown, ResponsiveContext, Text } from 'grommet'
import React from 'react'
import { useTranslation } from 'react-i18next'
const grommetCustomStyle = {
  global: {},
  image: {
    extend: `width: 100%;`,
  },
  box: {},
}

const Top = () => {
  const { t } = useTranslation()
  const products: {
    head: string
    items: []
  } = t('products')
  const collaborators: {
    head: string
    items: []
  } = t('collaborators')
  const contact: {
    head: string
    message: string
  } = t('contact')
  const activities: {
    head: string
    items: []
  } = t('activities')

  const productList = products.items.map((item: any, idx: number) => (
    <ResponsiveContext.Consumer key={idx}>
      {(size) => <Product product={item.product} key={idx} id={idx} size={size} />}
    </ResponsiveContext.Consumer>
  ))
  const collaboratorList = collaborators.items.map((item: any, idx: number) => (
    <ResponsiveContext.Consumer key={idx}>
      {(size) => <Collaborator profile={item.profile} key={idx} id={idx} size={size} />}
    </ResponsiveContext.Consumer>
  ))
  const activityList = activities.items.map((item: any, idx: number) => (
    <ResponsiveContext.Consumer key={idx}>
      {(size) => <Activity activity={item.activity} key={idx} id={idx} size={size} />}
    </ResponsiveContext.Consumer>
  ))

  return (
    <Grommet theme={grommetCustomStyle} full>
      <Header />
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box>
            <Image fit="cover" src={t('banner')}></Image>

            <Box pad={size} margin={{ bottom: size }}>
              <Heading level="3">{collaborators.head}</Heading>
              <Grid
                columns={{
                  count: 'fill',
                  size: 'small',
                }}
                gap={size}
              >
                {collaboratorList}
              </Grid>
            </Box>

            <Box background="light-1">
              <Box pad={size} margin={{ bottom: size }}>
                <Heading level="3">{products.head}</Heading>
                <Grid
                  columns={{
                    count: 'fill',
                    size: size,
                  }}
                  gap="small"
                >
                  {productList}
                </Grid>
              </Box>
            </Box>

            <Box background="light-1">
              <Box pad={size} margin={{ bottom: size }}>
                <Heading level="3">{activities.head}</Heading>
                <Grid
                  columns={{
                    count: 'fill',
                    size: size,
                  }}
                  gap="small"
                >
                  {activityList}
                </Grid>
              </Box>
            </Box>

            <Box pad={size} margin={{ bottom: size }}>
              <Heading level="3">{contact.head}</Heading>

              <Text textAlign="center" alignSelf="center" margin={{ vertical: size }} size="xsmall">
                <Markdown>{contact.message}</Markdown>
              </Text>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
      <Footer />
    </Grommet>
  )
}

export default Top
