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
        url(
          transformation: {
            image: { resize: { width: 320, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
      video {
        id
        url
        mimeType
      }
    }
    recent: projects(orderBy: order_ASC, where: { recent: true }) {
      id
      title
      link
      thumb {
        id
        url(
          transformation: {
            image: { resize: { width: 320, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
      video {
        id
        url
        mimeType
      }
      body
    }
    projects(orderBy: order_ASC, where: { recent: false }) {
      id
      title
      link
      thumb {
        id
        url(
          transformation: {
            image: { resize: { width: 320, fit: clip } }
            document: { output: { format: jpg } }
            validateOptions: true
          }
        )
      }
      video {
        id
        url
        mimeType
      }
      body
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
