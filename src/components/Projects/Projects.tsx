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

const Projects = ({ title, data }: IProjects) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>{data && data.map((p, index) => <Project key={index.toString()} project={p} />)}</List>
  </Wrapper>
)

export default Projects
