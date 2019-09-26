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

const renderers = {
  link: (props: any) => {
    if (props.href.match('http')) {
      return (
        <a href={props.href} target="_blank" rel="nofollow noreferrer noopener">
          {props.children}
        </a>
      )
    }
    return <a href={props.href}>{props.children}</a>
  },
}

const Body: React.SFC<Prop<Props>> = ({ data, title }) => (
  <Fragment>
    {title && (
      <Wrapper>
        <Title>{title}</Title>
        <Markdown renderers={renderers} source={data} />
      </Wrapper>
    )}

    {!title && (
      <Section>
        {data && <Markdown renderers={renderers} source={data} />}
      </Section>
    )}
  </Fragment>
)

export default Body
