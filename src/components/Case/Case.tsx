import React, { useContext } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { Wrapper } from 'ui'
import { Context } from 'context'
import { Types } from 'reducers'
import Markdown from 'markdown-to-jsx'

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
  z-index: 100000;
`

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: 0;
  width: 100%;
  position: relative;
  max-width: 1024px;
  table-layout: fixed;

  th {
    text-align: left;
  }

  tr,
  td,
  tbody {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  td {
    width: 100%;
  }

  ${({ theme: { breakpoint } }) => `
    @media${breakpoint.laptop} {
      td {
        width : auto;
      }
    }`};
`

const Img = styled.img`
  position: relative;
  max-width: 100%;
`

const CaseWrapper = styled(Wrapper)`
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
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

const IFrameCase = styled.iframe`
  margin: 0 auto;
  display: block;
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

const Span = styled.span`
  padding: 56.25% 0 0 0;
  position: relative;
  display: block;
`

const ContainerAnim = motion.custom(Container)

const Case = () => {
  const {
    dispatch,
    state: { project },
  } = useContext(Context)

  const onClose = () => dispatch({ type: Types.CHANGE_PROJECT, payload: { project: null } })

  return (
    <AnimatePresence>
      <ContainerAnim
        key={project?.id}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CaseWrapper as="div">
          <CloseButton onClick={onClose}>×</CloseButton>
          {project?.body ? (
            <Markdown
              options={{
                overrides: {
                  span: {
                    component: Span,
                  },
                  img: {
                    component: Img,
                  },
                  table: {
                    component: Table,
                  },
                  iframe: {
                    component: IFrameCase,
                  },
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}
            >
              {project.body}
            </Markdown>
          ) : (
            <>
              <h1>{project?.title}</h1>
              <IFrame src={project?.link} />
            </>
          )}
        </CaseWrapper>
      </ContainerAnim>
    </AnimatePresence>
  )
}

export default Case
