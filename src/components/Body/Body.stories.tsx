import * as React from 'react';
import { storiesOf } from '@storybook/react'
import Body from './Body';
const data = require('../../content/Body.md')

storiesOf('Body', module).add('Body', () => (
    <div>
      <Body data={data} />
    </div>

))