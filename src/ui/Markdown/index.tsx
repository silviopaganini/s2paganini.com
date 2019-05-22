import styled from 'styled-components'
import Markdown from 'react-markdown'

export default styled(Markdown)`
  padding-left: 5px;

  h1 {
    font-size: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      color: ${({ theme: { colors } }) => colors.grey};
      list-style: none;
      font-size: 14px;
      margin-bottom: 3px;

      & > ul {
        margin-bottom: 5px;
        padding-left: 15px;

        & > li {
          list-style: none;
          color: ${({ theme: { colors } }) => colors.darkerGrey};
        }
      }
    }
  }
`
