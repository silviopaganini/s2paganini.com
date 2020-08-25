import React, { useState, useContext, useEffect, useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { IProject } from 'types'
import { Context } from 'context'
import { Types } from 'reducers'

type ImageProps = {
  src: string
}

const marginDiff = 45

const Wrapper = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  width: ${() => window.innerWidth / 2 - marginDiff}px;
  height: ${() => window.innerWidth / 2 - marginDiff}px;
  margin: 10px 0;
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.colors.green}; */
  display: flex;
  flex-direction: column;
  border: 5px solid ${({ theme }) => theme.colors.darkGrey};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
  }

  ${({ theme: { breakpoint } }) => `
    @media${breakpoint.laptop} {
      margin: 10px 10px 10px 0;
      width: 32%;
    }`};
`

const DotSize = '1px'
const DotSpace = '5px'

const ProjectItem = styled.div`
  position: relative;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1, 1);
  transition: all 0.25s ${({ theme: { easings } }) => easings.easeOutCubic};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s;
    background: linear-gradient(
          90deg,
          black ${parseInt(DotSpace) - parseInt(DotSize)}px,
          transparent 1%
        )
        center,
      linear-gradient(black ${parseInt(DotSpace) - parseInt(DotSize)}px, transparent 1%) center,
      white;
    background-size: ${DotSpace} ${DotSpace};
  }

  ${Wrapper}:hover & {
    transform: scale(1.2, 1.2);
    &:after {
      opacity: 0.2;
    }
  }
`

const Video = styled.video`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  opacity: 0;
  object-fit: cover;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`

const Image = styled.div<ImageProps>`
  pointer-events: none;
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.15s ease-out;
  filter: grayscale(100%);

  ${Wrapper}:hover & {
    filter: grayscale(0%);
  }
`

const Text = styled.div`
  width: 100%;
  height: 34px;
  overflow: hidden;
  bottom: 0;
  position: absolute;
  background: ${({ theme: { colors } }) => colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  transition: all 0.2s ${({ theme: { easings } }) => easings.easeOutQuad};
  p {
    color: black;
    font-size: 13px;
  }

  transform: translateY(100%);

  ${Wrapper}:hover & {
    transform: translateY(0);
  }
`

const Offline = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 10;
  transition: all 0.35s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  height: 90%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);

  ${Wrapper}:hover & {
    opacity: 1;
  }
`

type Props = {
  project: IProject
}

const Project = ({ project }: Props) => {
  const { thumb, video, link, title } = project
  const [isHover, setHover] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { dispatch } = useContext(Context)
  const thumbWrapper = useRef<HTMLAnchorElement>()

  useLayoutEffect(() => {
    if (!thumbWrapper.current) return
    thumbWrapper.current.style.height = `${
      thumbWrapper.current.getBoundingClientRect().width * 0.66
    }px`
  })

  useEffect(() => {
    if (isHover) {
      if (videoRef && videoRef.current) videoRef.current.play()
    } else {
      if (videoRef && videoRef.current) videoRef.current.pause()
    }
  })

  const onClick = () => {
    dispatch({ type: Types.CHANGE_PROJECT, payload: { project } })
  }

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      ref={thumbWrapper as any}
    >
      <ProjectItem>
        <Image src={thumb.url} />
        {video && (
          <Video ref={videoRef} playsInline muted loop preload="auto" width="200" height="200">
            <source src={video.url} type="video/mp4" />
          </Video>
        )}
        {!link && (
          <Offline>
            <span role="img" aria-label="sad">
              😩
            </span>{' '}
            offline
          </Offline>
        )}
      </ProjectItem>
      <Text>
        <p>{title}</p>
      </Text>
    </Wrapper>
  )
}

export default Project
