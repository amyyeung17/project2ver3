import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ellipsis, lowShadow, mainColorLink,
   organizeAlignStart, organizeCenter, organizeRow } from '../Shared'
import { staggerChild, transitionCurateTrack, transitionEmotionTrack } from './transitions'
import { motion } from "framer-motion"; 

export const AlbumHolder = styled.div`
  ${organizeCenter}
  align-self: center;
  color:#2c484e;
  font-size: 1rem;
  max-height: 90%;
  max-width: 90%;
`

export const AlbumImage = styled.img`
  align-self: center;
  max-height: 90%;
  max-width: 22.5%;
`

export const HiddenButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 0rem !important;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }
`

export const HiddenButtonLink = styled(HiddenButton).attrs({as: Link})`
  z-index: 5;

  &:hover {
    pointer-events: ${props => !props.$selected ? 'auto' : 'none'};
  }
`

export const ImageLink = styled.a`
  display: contents;
  z-index: 5;
`

export const Links = styled(Link)`
  ${mainColorLink}
  font-size: .875rem;
  text-decoration-line: none;
  margin-top: .25rem;
`

export const MetadataDiv = styled.div`
  ${organizeAlignStart}
  box-sizing: border-box;
  padding: 0rem .5rem;
  width: ${props => props.type !== 'curateSelected' ? '70%' : '60%'};
`

export const MetadataLink = styled.a`
  ${mainColorLink}
  display: inline;
  margin-top: .25rem;
  padding: .125rem 0rem;
`

export const SimpleAlbumImage = styled.img`
  max-height: 90%;
  margin: .5rem;
  max-width: 22.5%;
`

export const SimpleAlbumHolder = styled(SimpleAlbumImage).attrs({as: 'div'})`
  ${organizeCenter}
  color: #2c484e;
  text-align: center;
  min-width: ${props => props.type === 'curateResults' && '12.5%'};
`

export const simpleDiv = css`
  ${organizeRow}
  box-sizing: border-box;
  border-bottom: 1.5px solid #c7dadd;
  border-top: ${props => props.num === 0 && '1.5px solid #c7dadd'};
  padding: 0rem .25rem 0rem .5rem;
  position: relative;
  width: 95%;

  ${props => props.selected ?
    css`
      background-color: #EEF0F0;
      z-index: 4;
    `
    :
    css`
      background-color: white;
      z-index: 2;
      &:hover {
        background-color: #EEF0F0;
        cursor: pointer;
      }
    `
  }
`

export const SimpleInfoArtist = styled.p`
  ${ellipsis}
  font-size: .875rem;
  margin: 0rem;
  opacity: .67;
`

export const SimpleInfoDiv = styled.div`
  ${organizeAlignStart}
  box-sizing: border-box;
  height: inherit;
  padding: .5rem;
  overflow-x: hidden;
  width: ${props => props.type === 'albums' ? '95%' : '85%'};
  z-index: ${props => props.selectedTrack && '10'};
`

export const SimpleInfoTitle = styled.p`
  ${ellipsis}
  font-weight: 500;
  margin: .5rem 0rem;
`

export const TrackText = styled.p`
  color: #212121;
  display: inline;
  display: -webkit-box;
  -webkit-line-clamp: 2;
          line-clamp: 2; 
  -webkit-box-orient: vertical;
  font-size: .875rem;
  font-weight: 450;
  margin: .125rem 0rem;
  padding: .125rem 0rem;
  overflow: hidden;
`

//TODO - fix margin
export const TrackTitleIcon = styled.i.attrs({className: 'bi bi-explicit-fill'})`
  font-size: ${props => props.size === 'big' && '1.25rem'};
  margin: ${props => props.size === 'big' ? '0rem' : '.125rem .25rem .125rem .5rem'};
`

//2. TODO - max-wdith can just be 100%, remove display: inline-block?
export const TrackTitleText = styled.p`
  ${ellipsis}
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 500;
  margin: .25rem 0rem;
  max-width: 100%;
  z-index: 1;
`

export const TrackDiv = styled(motion.div)`
  ${lowShadow}
  border: 2px solid #85a2a9;
  border-radius: .25rem;
  display: flex;
  max-height: 12vh;
  transition: all 350ms ease-out;
  &:hover {
    border-color: #f2d0a4;
    height: auto;
    max-height: 100%;
  }
`

export const AllTracksDiv = styled(TrackDiv).attrs(props => {
  switch(props.type) {
    case 'inputs':
    case 'results':
      return staggerChild
    case 'emotionTracks':
      return transitionEmotionTrack
    case 'curateSelected':
      return transitionCurateTrack
  }
})`
  height: auto;
  justify-content: space-between; 
  margin: ${props => props.content > 2 ? 'auto' : '.5rem 0rem'};
  overflow: hidden;
  padding: .25rem .25rem .25rem .5rem;
  
  width: 95%;
  ${props => props.type === 'emotionTracks' &&
    css`
      max-width: calc(55rem * .9 * .95);
      min-width: calc(35rem * .9 * .95);
      width: ${.9 * .95 * 100 + '%'};
    `  
  }
`

export const HiddenDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 0;
  opacity: 0;
  transform: translateY(-7vh);
  transition: max-height 500ms ease-out, transform 500ms ease-out, opacity 300ms ease-out, max-width 500ms ease-out;
  z-index: -1;

  ${TrackDiv}:hover & {
    max-height: 100%;
    opacity: 1;
    transform: translateY(0);
    transition: all 500ms ease-in;
    z-index: 1;
  }
`

export const TrackTextLightDiv = styled.div`
  ${ellipsis}
  display: flex;
  font-size: .875rem;
  max-height: 100%;
  opacity: .67;
  transition: all 100ms ease-out 500ms;
  position: absolute;
  top: 67.5%;
  width: ${.675 * .95 * 100 + '%'};
  z-index: 1;
  
  ${TrackDiv}:hover & {
    opacity: 0;
    transition: all 0s ease-out 150ms;
    max-height: 0;
    z-index: -1;
  }
`
//1. TODO -  Why is cursor default here? 
export const TrackTitleDiv = styled.div`
  ${organizeRow}
  color: #2c484e;
  cursor: ${props => props.selectedTrack && 'default'};
  position: relative;
  top: ${props => ['inputs', 'results', 'curateSelected', 'emotionTracks'].includes(props.type) && '-.25rem'};
  width: 95%;

  ${TrackDiv}:hover & {
    top: 0
  }
`

export const SpotifyImage = styled(AlbumImage)`
  align-self: flex-end;
  max-height: 2rem;
  max-width: 2rem;
  padding: .25rem;
  width: auto;
  z-index: 5;

  ${props => (props.type === 'main' || props.type === 'template') &&
    css`
      align-self: inherit;
      max-height: 2.25rem;
      max-width: 100%;
    `
  }

  ${ImageLink}:hover & {
    opacity: .75
  }
`

export const SpotifyBubbleDiv = styled.div`
  background-color: #2c484e;
  border: 2px solid #2c484e;
  border-radius: .5rem;
  color: white;
  display: none;
  font-size: .875rem;
  padding: .25rem;
  position: relative;

  &:after {
    border: 8px solid transparent;
    border-bottom: 0;
    border-top-color: #2c484e;
    bottom: 0;
    content: '';
    height: 0;
    left: 50%;
    margin-bottom: -8px;
    margin-left: -8px;
    position: absolute;
    width: 0;
  }

  ${ImageLink}:hover ~ && {
    ${organizeCenter};
    position: absolute;

    ${props => (
      props.type === 'curateResults' ?
      css`
        right: -1.25rem;
        top: 1.125rem;
        width: 5.25rem;
      `
      :
      css`
        right: -.175rem;
        top: .125rem;
        width: 2.75rem;
      `
    )}
  }
`
