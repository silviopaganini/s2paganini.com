import React from 'react'
import styled from 'styled-components'
import Markdown from 'ui/Markdown'
import Wrapper from 'ui/Wrapper'
import Title from 'ui/Title'
import { renderers } from 'utils'

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
        <Markdown renderers={renderers} source={data} />
      </Wrapper>
    ) : (
      <Section>
        {data && <Markdown renderers={renderers} source={data} />}
      </Section>
    )}
  </>
)

export default Body
