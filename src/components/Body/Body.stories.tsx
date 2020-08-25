import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Body from './Body'
import mock from '../../mock'

storiesOf('Body', module).add('Body', () => (
  <div>
    <Body data={mock.contents.find(c => c.type === 'intro')!.content} />
  </div>
))
