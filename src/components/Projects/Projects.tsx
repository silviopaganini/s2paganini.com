import React from 'react'
import styled from 'styled-components'
import Project from '../Project'
import { IProjects } from '../../types'
import Wrapper from '../../ui/Wrapper';
import Title from '../../ui/Title';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Projects: React.SFC<IProjects> = ({ title, data }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>
      {data && data.map(p => (
        <Project
          key={p.id}
          src={p.thumb.url}
          link={p.link}
          video={p.video ? p.video.url : null}
          title={p.title}
        />
      ))}
    </List>
  </Wrapper>
)

export default Projects
