import React, { useContext } from 'react'
import { graphql, ChildDataProps } from 'react-apollo'
import styled from 'styled-components'
import { Projects, Stack, Body, Case, Background, Footer } from './components'
import { IProject, IStack, IContact, IContent } from './types'
import query from './query'
import { Context } from 'context'

const Main = styled.main`
  padding: 0 30px 50px;
`

const Loading = styled(Main)`
  padding: 30px;
`

type Response = {
  contents?: IContent[]
  projects?: IProject[]
  experiments?: IProject[]
  techStacks?: IStack[]
  contacts?: IContact[]
}

type ChildProps = ChildDataProps<{}, Response, {}>

const App = ({
  data: {
    contents,
    projects,
    experiments,
    techStacks,
    contacts,
    loading,
    error,
  },
}: ChildProps) => {
  const {
    state: { project },
  } = useContext(Context)

  if (loading) return <Loading>Loading...</Loading>
  if (error) return <Loading>{JSON.stringify(error)}</Loading>

  return (
    <Main>
      {!project && <Background />}
      <Body
        data={
          contents
            ? contents.find((c) => c.type === 'intro')!.content
            : undefined
        }
      />
      <Projects title="Experiments" data={experiments} />
      <Projects title="Featured Work" data={projects} />
      <Stack data={techStacks} />
      <Body
        title="Awards"
        data={
          contents
            ? contents.find((c) => c.type === 'awards')!.content
            : undefined
        }
      />
      <Body
        title="Publications"
        data={
          contents
            ? contents.find((c) => c.type === 'publications')!.content
            : undefined
        }
      />
      {project && <Case />}
      <Footer data={contacts} />
    </Main>
  )
}

export default graphql<{}, Response, {}, ChildProps>(query)(App)
