import React, { useContext } from 'react'
import styled from 'styled-components'
import { Wrapper, Markdown } from 'ui'
import { renderers } from 'utils'
import { Context } from 'context'
import { Types } from 'reducers'

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: black;
  margin: 0;
  padding: 5% 10%;
`

const CaseWrapper = styled(Wrapper)`
  max-width: 1024px;
  margin: 0 auto;
  position: relative;

  img {
    width: 100%;
  }

  span {
    width: 100%;
    text-align: center;
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 0;
    width: 100%;
    position: relative;
  }

  table,
  tr,
  td,
  tbody {
    margin: 0;
    padding: 0;
  }
`

const CloseButton = styled.button`
  border: 0;
  outline: none;
  background: transparent;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 2rem;
  cursor: pointer;
`

const IFrame = styled.iframe`
  border: 1px solid white;
  outline: none;
  width: 100%;
  height: 70vh;

  .credits {
    display: none;
  }
`

const Case = () => {
  const {
    dispatch,
    state: { project },
  } = useContext(Context)

  const onClose = () => dispatch({ type: Types.CHANGE_PROJECT, payload: { project: null } })

  return (
    <Container>
      <CaseWrapper as="div">
        <CloseButton onClick={onClose}>×</CloseButton>
        {project?.body ? (
          <Markdown escapeHtml={false} renderers={renderers} source={project?.body} />
        ) : (
          <>
            <h1>{project?.title}</h1>
            <IFrame src={project?.link} />
          </>
        )}
      </CaseWrapper>
    </Container>
  )
}

export default Case
