import gql from 'graphql-tag'

const query = gql`
{
  contents {
    content
    type
  }
  experiments {
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