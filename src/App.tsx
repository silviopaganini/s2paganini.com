import React, { Component } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import Body from "./components/Body"
import Background from "./components/Background"
import Footer from "./components/Footer"
import { IProject, IStack, IContact, IContent } from './types'

const Main = styled.main`
  padding: 0 30px 50px;
`

const Loading = styled(Main)`
  padding: 30px;
`

type Data = {
  contents: IContent[],
  projects: IProject[],
  techStacks: IStack[],
  contacts: IContact[],
}

const query = gql`
{
  contents {
    content
    type
  }
  projects {
    id
    title
    link
    thumb {
      id
      url
    }
    video {
      id
      url
      mimeType
    }
  }
  techStacks {
    title
    stack
  }
  contacts {
    link
    icon {
      id
      url
    }
  }
}
`

class App extends Component {
  render() {
    return (
      <Query<Data> query={query}>
        {({ loading, error, data }) => {
          console.log(JSON.stringify(data));
          if (loading) return <Loading>Loading...</Loading>
          if (error) return <Loading>{JSON.stringify(error)}</Loading>
          if (!data) return

          return (
            <Main>
              <Background />
              <Body data={data.contents.find(c => c.type === 'intro')!.content} />
              <Projects title="Featured Work" data={data.projects} />
              <Stack data={data.techStacks} />
              <Body title="Awards" data={data.contents.find(c => c.type === 'awards')!.content} />
              <Body title="Publications" data={data.contents.find(c => c.type === 'publications')!.content} />
              <Footer data={data.contacts} />
            </Main>
          )
        }}
      </Query>
    )
  }
}

export default App
