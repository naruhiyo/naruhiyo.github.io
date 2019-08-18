import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Header from '../src/components/layouts/Header'
import '../src/plugins/i18n'

storiesOf('Header', module)
.add('default Headder', () => <Header />)
