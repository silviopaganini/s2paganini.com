import styled from 'styled-components'

export const Li = styled.li`
  font-size: 0.95rem;
  line-height: 24px;
  margin: 0 0 8px;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.darkerGrey};
`

export const Ul = styled.ul`
  font-size: 0.95rem;
  line-height: 24px;
  margin: 0 0 8px;
  color: ${({ theme: { colors } }) => colors.lightGrey};
`
