import styled from 'styled-components'

export default styled.h2`
  color: ${({ theme: { colors } }) => colors.grey};
  font-size: 1.2rem;
`

export const SubTitle = styled.h3`
  font-size: 1.025rem;
  line-height: 24px;
  margin: 0 0 8px;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.lightGrey};
`

export const TerTitle = styled.h4`
  font-size: 0.85rem;
  line-height: 0;
  font-weight: normal;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.grey};
`
