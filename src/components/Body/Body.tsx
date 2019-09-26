import React, { Fragment } from 'react'
import styled from 'styled-components'
import Markdown from 'ui/Markdown'
import Wrapper from 'ui/Wrapper'
import Title from 'ui/Title'
import { Prop } from 'types'

const Section = styled.section`
  max-width: 800px;
`

type Props = {
  data?: string
  title?: string
}

const Body: React.SFC<Prop<Props>> = ({ data, title }) => (
  <Fragment>
    {title && (
      <Wrapper>
        <Title>{title}</Title>
        <Markdown source={data} />
      </Wrapper>
    )}

    {!title && <Section>{data && <Markdown source={data} />}</Section>}
  </Fragment>
)

export default Body
