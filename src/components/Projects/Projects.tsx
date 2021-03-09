import React from 'react'
import styled from 'styled-components'
import Project from '../Project'
import { IProjects } from 'types'
import { Wrapper, Title } from '../../ui'
import { TerTitle } from '../../ui/Title'

const List = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  gap: 20px;

  ${({ theme: { breakpoint } }) => `
    @media${breakpoint.laptop} {
      grid-template-columns: repeat(auto-fill, minmax(15%, 18%));
      gap: 1vw;
    }`};
`

const TitleContainer = styled.div`
  display: inline-block;
  h2 {
    display: inline-block;
  }
  span {
    margin-top: 23px;
    margin-left: 10px;
    font-size: 10px;
    color: grey;
  }
`

const Projects = ({ subTitle, title, data }: IProjects) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        {subTitle && <TerTitle>{subTitle}</TerTitle>}
      </TitleContainer>
      <List>
        {data &&
          data.map((p, index) => <Project index={index} key={index.toString()} project={p} />)}
      </List>
    </Wrapper>
  )
}

export default Projects
