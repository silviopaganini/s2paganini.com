import React from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import { Wrapper, Title } from 'ui'

const Section = styled.section`
  max-width: 800px;
`

type Props = {
  data?: string
  title?: string
}

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
  color: ${({ theme: { colors } }) => colors.lightGrey};
`

const Body = ({ data, title }: Props) => (
  <>
    {title ? (
      <Wrapper>
        <Title>{title}</Title>
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
          {data!}
        </Markdown>
      </Wrapper>
    ) : (
      <Section>{data && <Markdown>{data}</Markdown>}</Section>
    )}
  </>
)

export default Body
