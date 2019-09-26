import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IProject } from 'types'

type ImageProps = {
  src: string
}

const Wrapper = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  height: 200px;
  width: 100vw;
  margin: 10px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  flex-direction: column;
  border: 5px solid ${({ theme }) => theme.colors.darkGrey};

  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
  }

  ${({ theme: { breakpoint } }) => `
    @media${breakpoint.laptop} {
      margin: 10px 10px 10px 0;
      width: 200px;
    }`
  };
`

const ProjectItem = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1, 1);
  transition: all 0.25s ${({ theme: { easings } }) => easings.easeOutCubic};

  ${Wrapper}:hover & {
    transform: scale(1.2, 1.2);
  }
`

const Video = styled.video`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  z-index: 1;
  transform: translate(-50%, -50%);
  transition: all 0.35s ease-out;
  height: 190px;
  width: 190px;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`

const Image = styled.div<ImageProps>`
  pointer-events: none;
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
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

const Project: React.SFC<IProject> = ({ thumb, video, link, title }) => {
  const [isHover, setHover] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isHover) {
      if (videoRef && videoRef.current) videoRef.current.play()
    } else {
      if (videoRef && videoRef.current) videoRef.current.pause()
    }
  })

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      rel="noopener noreferrer"
      href={link}
      target="_blank"
    >
      <ProjectItem>
        <Image src={thumb.url} />
        {video && (
          <Video
            ref={videoRef}
            playsInline
            muted
            loop
            preload="auto"
            width="200"
            height="200"
          >
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
