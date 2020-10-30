import React, { useState, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IProject } from 'types'
import { Context } from 'context'
import { Types } from 'reducers'
import { motion, Variants } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor'

type ImageProps = {
  src: string
}

const Wrapper = styled.a`
  align-self: center;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* background-color: ${({ theme }) => theme.colors.green}; */
  display: flex;
  flex-direction: column;
  height: 0;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};

    &:after {
      box-shadow: inset 0px 0px 0px 5px ${({ theme }) => theme.colors.green};
    }
  }

  &:after {
    transition: all 0.2s;
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.darkGrey};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  padding-bottom: 70%;

`

const DotSize = '1px'
const DotSpace = '5px'

const ProjectItem = styled.div`
  position: absolute;
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
    z-index: -1;
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
  position: absolute;
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

type Props = {
  project: IProject
  index: number
}

const AnimProject = motion.custom(Wrapper)

const Project = ({ project, index }: Props) => {
  const { thumb, video, title } = project
  const [isHover, setHover] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [visible, setvisible] = useState(false)

  const onChange = (isVisible: boolean) => {
    if (!visible && isVisible) setvisible(isVisible)
  }

  const { dispatch } = useContext(Context)

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

  const variants = {
    hid: {
      opacity: 0,
      y: -25,
      scale: 1.1,
    },
    vis: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  } as Variants

  return (
    <VisibilitySensor active={!visible} partialVisibility onChange={onChange}>
      <AnimProject
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
        initial="hid"
        variants={variants}
        animate={visible ? 'vis' : 'hid'}
        transition={{
          delay: index * 0.05,
          ease: 'backInOut',
          duration: 0.4,
        }}
      >
        <ProjectItem>
          <Image src={thumb.url} />
          {video && (
            <Video ref={videoRef} playsInline muted loop preload="auto" width="200" height="200">
              <source src={video.url} type="video/mp4" />
            </Video>
          )}
        </ProjectItem>
        <Text>
          <p>{title}</p>
        </Text>
      </AnimProject>
    </VisibilitySensor>
  )
}

export default Project
