import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Stack from './Stack'
import mock from '../../mock'

storiesOf('Stack', module).add('Stack', () => (
  <div>
    <Stack data={mock.techStacks} />
  </div>
))
