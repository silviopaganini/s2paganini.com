import React from 'react'
import styled from 'styled-components'
import { Wrapper, Markdown } from 'ui'
import { renderers } from 'utils'

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

const test = `
# SPINNUP

FLUUUID was approached by [Dragon Rouge](https://www.dragonrouge.com) London to collaborate on a music visualisation player for the new Universal Music Distribution website.

We’ve partnered up with [Bruno Imbrizi](http://brunoimbrizi.com) and created 5 different WebGL reactive visualisations that you can see below.

Visit the project online https://spinnup.com/

See live demo [Demo](http://brunoimbrizi.com/works/spinnup/)

|||
|---|---|
|![](https://miro.medium.com/max/1400/1*4S25xw-t-9rtSd0zzlh07g.jpeg) | ![](https://miro.medium.com/max/1400/1*OUYTsldoNXmyg4j9EJ5o9A.jpeg) |

||
|---|
|![](https://miro.medium.com/max/1400/1*-XUWD5J2HOKt6OG_KF9vMg.jpeg)|

|||
|---|---|
|![](https://miro.medium.com/max/1400/1*1eQ8oYpsWACCY9fc8UPHhQ.jpeg) | ![](https://miro.medium.com/max/1400/1*9V12VEgZgz6ksoBhvgRNVg.jpeg) |

## Credits:
**Production:** FLUUUID

**Creative Developers:** Bruno Imbrizi, Silvio Paganini

**Agency:** Dragon Rouge

**Client:** Universal Music

`
// |||
// |---|---|
// |<iframe src="https://player.vimeo.com/video/318156251" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>|<iframe title="vimeo-player" src="https://player.vimeo.com/video/318156268" width="100%" height="360" frameborder="0" allowfullscreen></iframe>|

// <iframe title="vimeo-player" src="https://player.vimeo.com/video/318156301" width="100%" height="360" frameborder="0" allowfullscreen></iframe>

// |||
// |---|---|
// |<iframe title="vimeo-player" src="https://player.vimeo.com/video/318156279" width="100%" height="360" frameborder="0" allowfullscreen></iframe>|<iframe title="vimeo-player" src="https://player.vimeo.com/video/318156290" width="100%" height="360" frameborder="0" allowfullscreen></iframe>|

type CaseProps = {
  //
}

const Case = () => {
  return (
    <Container>
      <CaseWrapper as="div">
        <Markdown escapeHtml={false} renderers={renderers} source={test} />
      </CaseWrapper>
    </Container>
  )
}

export default Case
