import React from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import Wrapper from '../../ui/Wrapper'
import Title, { SubTitle } from '../../ui/Title'
import { IStacks } from 'types'

const StacksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StackWrapper = styled.div`
  justify-content: flex-start;
  margin-right: 40px;
  margin-bottom: 40px;
`

const Li = styled.li`
  font-size: 0.95rem;
  line-height: 24px;
  margin: 0 0 8px;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.darkerGrey};
`

const Ul = styled.ul`
  font-size: 0.95rem;
  line-height: 24px;
  margin: 0 0 8px;
  padding-top: 8px;
  color: ${({ theme: { colors } }) => colors.lightGrey};
`

const Stack = ({ data }: IStacks) => (
  <Wrapper>
    <Title>Tech Stack</Title>
    <StacksWrapper>
      {data &&
        data.map(d => (
          <StackWrapper key={d.title}>
            <SubTitle>{d.title}</SubTitle>
            <Markdown
              options={{
                overrides: {
                  li: {
                    component: Li,
                  },
                  ul: {
                    component: Ul,
                  },
                },
              }}
            >
              {d.stack}
            </Markdown>
          </StackWrapper>
        ))}
    </StacksWrapper>
  </Wrapper>
)

export default Stack
