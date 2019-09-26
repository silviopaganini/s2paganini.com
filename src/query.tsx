import gql from 'graphql-tag'

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

export default query