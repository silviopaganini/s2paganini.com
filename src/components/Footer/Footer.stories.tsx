import * as React from 'react';
import { storiesOf } from '@storybook/react'
import Footer from './Footer';
import mock from '../../mock'

storiesOf('Footer', module).add('Footer', () => (
    <div>
      <Footer data={mock.contacts} />
    </div>

))