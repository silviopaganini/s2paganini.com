import React, { useState } from 'react'
import styled from 'styled-components'
import Project from '../Project'
import { IProjects } from 'types'
import { Wrapper, Title } from 'ui'

type ListProps = {
  opened?: boolean
}

const List = styled.div.attrs<ListProps>(({ opened }) => ({
  style: {
    height: opened ? 'auto' : 0,
  },
}))<ListProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  transition: height 0.5s ${({ theme }) => theme.easings.easeOutQuad};

  ${({ theme: { breakpoint } }) => `
    @media${breakpoint.laptop} {
      justify-content: flex-start;
    }`};
`

const TitleContainer = styled.div`
  display: inline-block;
  cursor: pointer;
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

const Projects = ({ title, data }: IProjects) => {
  const [opened, setOpened] = useState(false)

  const onToggle = () => {
    setOpened(!opened)
  }

  console.log(opened)

  return (
    <Wrapper>
      <TitleContainer onClick={onToggle}>
        <Title>{title}</Title>
        <span>{!opened ? '(show)' : '(hide)'}</span>
      </TitleContainer>
      <List opened={opened}>
        {data &&
          data.map((p, index) => (
            <Project opened={opened} index={index} key={index.toString()} project={p} />
          ))}
      </List>
    </Wrapper>
  )
}

export default Projects
