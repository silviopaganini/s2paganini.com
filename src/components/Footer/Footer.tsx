import React from 'react'
import styled from 'styled-components'
import { IContacts } from '../../types'
import Wrapper from '../../ui/Wrapper'

const ContactWrapper = styled(Wrapper)`
  flex-direction: column;
`

const Contact = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  display: inline-block;
`

const ContactLink = styled.a`
  width: 35px;
  height: 35px;
  display: block;
  transition: background-color 0.2s;
  border: 0;

  &:hover {
    background-color: #434343;
    border: 0;
  }
`

const Image = styled.img`
  width: 35px;
  height: 35px;
`

const Footer: React.SFC<IContacts> = ({ data }) => {
  return (
    <ContactWrapper>
      {data.map(c => (
        <Contact key={c.link}>
          <ContactLink href={c.link} target="_blank">
            <Image src={c.icon.url} />
          </ContactLink>
        </Contact>
      ))}
    </ContactWrapper>
    // <div class="contact">
    //   <div class="contact_link">
    //     <a href="http://twitter.com/silviopaganini" target="_blank">
    //       <img src="./static/images/s/tw.png" />
    //     </a>
    //   </div>
    //   <div class="contact_link">
    //     <a href="https://medium.com/@silviopaganini" target="_blank">
    //       <img src="./static/images/s/me.png" />
    //     </a>
    //   </div>
    //   <div class="contact_link">
    //     <a href="http://gplus.to/silviopaganini" target="_blank">
    //       <img src="./static/images/s/gp.png" />
    //     </a>
    //   </div>
    //   <div class="contact_link">
    //     <a href="http://linkedin.com/in/silviopaganini" target="_blank">
    //       <img src="./static/images/s/li.png" />
    //     </a>
    //   </div>
    //   <div class="contact_link">
    //     <a href="http://facebook.com/silviopaganini" target="_blank">
    //       <img src="./static/images/s/f.png" />
    //     </a>
    //   </div>
    //   <div class="contact_link">
    //     <a href="http://github.com/silviopaganini" target="_blank">
    //       <img src="./static/images/s/gh.png" />
    //     </a>
    //   </div>
    // </div>
  )
}

export default Footer
