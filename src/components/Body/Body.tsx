import React, { Fragment } from 'react'
import Markdown from '../../ui/Markdown'
import Wrapper from '../../ui/Wrapper'
import Title from '../../ui/Title'

interface Props {
  data?: string
  title?: String
}

const Body: React.SFC<Props> = ({ data, title }) => (
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
