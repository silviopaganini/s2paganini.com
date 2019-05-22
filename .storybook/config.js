import React from 'react'
import { configure, addDecorator } from '@storybook/react';

import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import '../src/index.css'

const req = require.context('../src', true, /stories.tsx$/);

const Decorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(Decorator)

configure(() => req.keys().forEach(req), module);