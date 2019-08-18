import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Collaborator from '../src/components/Collaborator'

storiesOf('Collaborator', module).add('Collaborator', () => (
    <Collaborator profile={
      { name: 'hoge',
      image: '',
      bio: 'fuga',
      link: {
        github: '',
        portfolio: '',
          qiita: ''
        }
    }}
    } key={0} id={0} size="small" />
  ))