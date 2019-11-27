import React from 'react'
import styled from 'styled-components'
import Project from '../Project'
import { IProjects } from 'types'
import Wrapper from 'ui/Wrapper'
import Title from 'ui/Title'

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme: { breakpoint } }) => `
    @media${breakpoint.laptop} {
      justify-content: flex-start;
    }`};
`

const Projects: React.SFC<IProjects> = ({ title, data }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>
      {data &&
        data
          .map((p, index) => (
            <Project
              key={index.toString()}
              thumb={p.thumb}
              link={p.link}
              video={p.video}
              title={p.title}
            />
          ))}
    </List>
  </Wrapper>
)

export default Projects
