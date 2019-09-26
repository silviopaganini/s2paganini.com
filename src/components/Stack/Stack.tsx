import React from 'react'
import styled from 'styled-components'
import Markdown from '../../ui/Markdown'
import Wrapper from '../../ui/Wrapper'
import Title, { SubTitle } from '../../ui/Title'
import { IStacks } from '../../types'

const StacksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StackWrapper = styled.div`
  justify-content: flex-start;
  margin-right: 40px;
  margin-bottom: 40px;
`

const Stack: React.SFC<IStacks> = ({ data }) => (
  <Wrapper>
    <Title>Tech Stack</Title>
    <StacksWrapper>
      {data && data.map(d => (
        <StackWrapper key={d.title}>
          <SubTitle>{d.title}</SubTitle>
          <Markdown source={d.stack} />
        </StackWrapper>
      ))}
    </StacksWrapper>
  </Wrapper>
)

export default Stack
