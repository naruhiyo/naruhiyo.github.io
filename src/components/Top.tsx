import {
  Box,
  Grid,
  Grommet,
  Heading,
  Image,
  Markdown,
  ResponsiveContext,
  Text,
} from 'grommet'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Collaborator from './Collaborator'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Product from './Product'
const grommetCustomStyle = {
  image: {
    extend: `width: 100%`,
  },
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

  const productList = products.items.map((product: any, idx: number) => (
    <ResponsiveContext.Consumer key={idx}>
      {size => (
        <Product product={product.product} key={idx} id={idx} size={size} />
      )}
    </ResponsiveContext.Consumer>
  ))
  const collaboratorList = collaborators.items.map(
    (collaborator: any, idx: number) => (
      <ResponsiveContext.Consumer key={idx}>
        {size => (
          <Collaborator
            profile={collaborator.profile}
            key={idx}
            id={idx}
            size={size}
          />
        )}
      </ResponsiveContext.Consumer>
    )
  )

  return (
    <Grommet theme={grommetCustomStyle}>
      <Header />
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            <Box fill={true}>
              <Image fit="cover" src={t('banner')}></Image>
            </Box>

            <Grid
              fill
              columns={['auto', 'flex']}
              rows={['auto', 'flex']}
              areas={[
                { name: 'collaborator', start: [0, 0], end: [1, 0] },
                { name: 'product', start: [1, 0], end: [2, 0] },
                { name: 'contact', start: [1, 0], end: [2, 0] },
              ]}
            />

            <Box gridArea="collaborator" pad={size}>
              <Heading level="3">{collaborators.head}</Heading>
              <Grid
                fill
                columns={{
                  count: 'fill',
                  size: 'small',
                }}
                gap="small"
                margin={{ bottom: size }}
              >
                {collaboratorList}
              </Grid>
            </Box>

            <Box gridArea="product" pad={size} background="light-1">
              <Heading level="3">{products.head}</Heading>
              <Grid
                fill
                columns={{
                  count: 'fill',
                  size: size,
                }}
                gap="small"
                margin={{ bottom: 'large' }}
              >
                {productList}
              </Grid>
            </Box>

            <Box
              gridArea="contact"
              margin={{ bottom: size }}
              pad={size}
              height={size}
            >
              <Heading level="3">{contact.head}</Heading>

              <Text
                textAlign="center"
                alignSelf="center"
                margin={{ vertical: size }}
                size="xsmall"
              >
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
