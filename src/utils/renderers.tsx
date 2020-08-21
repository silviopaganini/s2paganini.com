import React from 'react'

export default {
  link: (props: any) => {
    if (props.href.match('http')) {
      return (
        <a href={props.href} target="_blank" rel="nofollow noreferrer noopener">
          {props.children}
        </a>
      )
    }
    return <a href={props.href}>{props.children}</a>
  },
}
