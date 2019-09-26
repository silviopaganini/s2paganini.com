import React, { Fragment } from 'react'
import Markdown from '../../ui/Markdown'
import Wrapper from '../../ui/Wrapper'
import Title from '../../ui/Title'
import { Prop } from '../../types'

interface Props {
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

    {!title && <section>{data && <Markdown source={data} />}</section>}
  </Fragment>
)

export default Body
