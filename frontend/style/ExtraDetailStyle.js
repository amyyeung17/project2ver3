import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IconButton, mainColorLink, organizeAlignStart, 
  organizeCenter, organizeRow, organizeRowBetween, 
  reverseColorButton, smallHeader } from '../Shared'
import { staggerChildAlt, transitionExtraText, staggerParentAlt } from './transitions'
import { simpleDiv } from './TrackStyle'

export const AddedIcon = styled.span.attrs({className: 'bi bi-check'})`
  ${reverseColorButton};
  height: auto;
  font-size: 2.5rem;
  opacity: 1; 

  &:hover {
    box-shadow: none;
  }
`

export const AlignInfoDiv = styled.div`
  ${organizeAlignStart}
  border-top: 1.5px solid #c7dadd;
  box-sizing: border-box;
  padding: .5rem 0rem .5rem .5rem;
  width: 90%; 
`

export const DiscIcon = styled(AddedIcon).attrs({className: 'bi bi-disc'})`
  display: inherit;
  font-size: 1.5rem;
  margin: 0rem .3725rem 0rem .75rem;
`

export const DividerDisc = styled.div`
  ${organizeRow}
  box-sizing: border-box;
  color: #2c484e;
  font-weight: 450;
  margin: 1rem 0rem .5rem;
  width: 95%;
`

export const IconTextLink = styled(Link)`
  text-decoration: none;
`

export const Image = styled.img`
  aspect-ratio: 1;
  transition: all 300ms ease-in-out;
  margin-top: .6875rem;
  width: 100%;
`

export const ImageHolder = styled.div`
  ${organizeCenter}
  align-self: center;
  color: #2c484e;
  font-size: 1.25rem;
  min-height: 13rem;
  width: 100%;
`
//TODO
//width: ${props => props.location ? 'min(79vw, 69rem)' : 'min(82vw, 71rem)'};
export const MainDiv = styled.div`
  box-sizing: border-box;
  color: #2c484e;
  ${props => props.type === 'title' ? organizeRowBetween : organizeRow}
  justify-content: ${props => props.type === 'options' && 'flex-end'};
  margin: ${props => (props.type === 'title' || props.type === 'options' ) && '.5rem 0rem'};
  padding: 0rem .5rem;
  width: ${props => props.location ? 'min(80vw, 70rem)' : 'min(82vw, 71rem)'};
`

export const MainSliderButton = styled(IconButton).attrs({className: 'bi bi-info'})`
  font-size: 1.5rem;
`

export const MainSliderDiv = styled.div`
  ${organizeAlignStart}
  flex-direction: row;
  max-width: 73rem;
  min-width: 45rem;
  margin: 1rem 0rem;
  width: 85vw;
`

export const MainSliderLink = styled(motion.a).attrs(transitionExtraText)`
  ${mainColorLink}
`

export const MainSliderText = styled(motion.p).attrs(transitionExtraText)`
  color: #212121;
  margin: .5rem;
`

export const MainSliderTextDiv = styled.div`
  ${organizeRowBetween}
  font-size: .875rem;
  width: 85%;
`

export const MainText = styled.p`
  font-size: 1.5rem;
  font-weight: 450;
  margin: 0rem;
`

export const OptionDiv = styled.div`
  ${organizeRow}
  align-self: flex-end;
  color: #2c484e;
  right: 5%;
  margin-top: ${props => props.infoType === 'artists' && '2rem'};
  position: relative;
  width: auto;
`

export const TemplateDiv = styled.div`
  ${organizeAlignStart}
  flex-direction: row;
  margin-top: ${props => props.infoType === 'artists' && '1.5rem'};
  width: 85vw;
`

export const TemplateDisplayDiv = styled(motion.div).attrs(staggerParentAlt)`
  ${organizeCenter}
  position: relative;
  width: 90%;
`

export const DetailsHeader = styled.p`
  ${smallHeader}
  align-self: flex-start;
  font-size: 1rem;
  left: calc(.05 * .75 * 85vw);
`

export const TracksHeader = styled(DetailsHeader)`
  left: calc(.05 * (.75 * 85vw) + 1rem);
`

export const TemplateTrackDiv = styled(motion.div).attrs(staggerChildAlt)`
  ${simpleDiv}
  height: 4.75rem;
  width: 95%;
`

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
          line-clamp: 2; 
  -webkit-box-orient: vertical;
  font-weight: 450;
  margin: ${props => props.purpose === 'label' ? '.5rem .25rem' : '.5rem'};
  max-width: 87.5%;
  overflow: hidden;
`

export const TimeIcon = styled.i.attrs({className: 'bi bi-clock-fill'})`
  font-size: 1.25rem;
  margin: 0rem .375rem .125rem 1rem;
  margin-left: ${props => (!props.explicit) && '.125rem'};
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
  margin: .5rem 0rem;
  max-width: 85%;
`

export const TitleDiv = styled.div`
  ${organizeRowBetween}
  box-sizing: border-box;
  padding: .25rem 0rem;
  width: 100%;
`

export const TitleSmall = styled(Text)`
  color: #2c484e;
  font-size: 2rem;
  max-width: 75%;
`