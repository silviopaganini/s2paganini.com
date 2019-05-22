import React, { useState, useEffect } from 'react'
import styled, { withTheme } from 'styled-components'

interface IProject {
  src: string,
  video?: string,
  link: string,
  title: string
}

interface ImageProps {
  src: string,
}

const Wrapper = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px 10px 10px 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  flex-direction: column;

  border: 5px solid ${({theme}) => theme.colors.darkGrey};

  &:hover {
    border-color: ${({theme}) => theme.colors.green};
  }
`

const ProjectItem = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transform: scale(1, 1);
  transition: all .25s ${({ theme: { easings } }) => easings.easeOutCubic};

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
  transition: all .35s ease-out;
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
  transition: all .15s ease-out;
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
  transition: all .2s ${({ theme: { easings } }) => easings.easeOutQuad};
  p {
    color: black;
    font-size: 13px;
  }

  transform: translateY(100%);

  ${Wrapper}:hover & {
    transform: translateY(0);
  }
`

const Project:React.SFC<IProject> = ({ src, video, link, title }) => {
  const [isHover, setHover] = useState(false)
  let videoRef: HTMLVideoElement | null

  useEffect(() => {
    if (isHover) {
      if (videoRef) videoRef.play()
    } else {
      if (videoRef) videoRef.pause()
    }
  })

  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} rel='noopener noreferrer'
      href={link} 
      target='_blank'>
      <ProjectItem>
        <Image src={src} />
        {video &&
          <Video
            ref={r => { videoRef = r }}
            playsInline
            muted
            loop
            preload='auto'
            width='200'
            height='200'>
            <source src={video} type='video/mp4' />
          </Video>
        }
      </ProjectItem>
      <Text>
        <p>{title}</p>
      </Text>
    </Wrapper>
  )
}

// @ts-ignore
export default withTheme(Project) 
