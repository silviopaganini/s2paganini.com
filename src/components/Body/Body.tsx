import React from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import { Wrapper, Title } from 'ui'
import { Li, Ul } from 'ui/List'

const Section = styled.section`
  max-width: 800px;
`

type Props = {
  data?: string
  title?: string
}

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
              a: {
                props: {
                  target: '_blank',
                },
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
