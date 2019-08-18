import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Product from '../src/components/Product'

storiesOf('Product', module).add('Product', () => (
  <Product
    product={{ name: 'hoge', image: '', desc: '', github: '' }}
    key={0}
    id={0}
    size="small"
  />
))
