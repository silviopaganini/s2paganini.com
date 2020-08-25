import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Project from './Project'
storiesOf('Project', module).add('Project', () => (
  <div>
    <Project
      src="/mock/5gum.jpg"
      link="https://labs.fluuu.id/squares/dist/"
      video="/mock/5gum.mp4"
      title="Made With Code | Equality"
    />
  </div>
))
