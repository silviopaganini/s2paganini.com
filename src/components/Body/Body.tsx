import React from 'react'
import styled from 'styled-components'
import Markdown from 'markdown-to-jsx'
import { Wrapper, Title } from '../../ui'
import { Li, Ul } from '../../ui/List'

const Section = styled.section`
  max-width: 800px;
`

type Props = {
  data?: string
  title?: string
}

const options = {
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
}

const Body = ({ data, title }: Props) => (
  <>
    {title ? (
      <Wrapper>
        <Title>{title}</Title>
        <Markdown options={options}>{data!}</Markdown>
      </Wrapper>
    ) : (
      <Section>{data && <Markdown options={options}>{data}</Markdown>}</Section>
    )}
  </>
)

export default Body
