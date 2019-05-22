import * as React from 'react';
import { storiesOf } from '@storybook/react'
import Project from './Project';
storiesOf('Project', module).add('Project', () => (
    <div>
      <Project  
        src='/static/images/sq/x_0020_exp.jpg'
        link='https://labs.fluuu.id/squares/dist/'
        video='https://static.fluuu.id/s2paganini/static/videos/mp4/squares.mp4'
      />
    </div>

))