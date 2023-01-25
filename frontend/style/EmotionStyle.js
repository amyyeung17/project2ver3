import styled from 'styled-components'
import { motion } from "framer-motion"; 
import { IconButton, organizeCenter, organizeRowBetween, reverseColorButton } from '../Shared'
import { transitionEmotion, transitionEmotionText } from './transitions'

export const AnimatedText = styled(motion.p).attrs(transitionEmotionText)`
  color: #212121; 
  margin: .5rem 0rem;
`

export const EmotionButton = styled.button`
  ${reverseColorButton}
  border: 2px solid #2c484e;
  font-size: 1.125rem;
  height: 2.5rem;
  margin: .5rem 0rem;
  width: 8.5rem;
`

export const EmotionDiv = styled(motion.div).attrs(transitionEmotion)`
  ${organizeCenter};
  height: 63.75vh;
  overflow-x: hidden;
  width: 85vw;
`

export const EmotionIconButton = styled(IconButton).attrs({className: 'bi bi-x'})`
  padding: 3px;
  margin: 0rem .5rem;
  width: 2.5rem;
`

export const EmotionText = styled.p`
  font-size: .875rem;
  margin: .25rem;
  opacity: .67;
`

export const EmotionTracksDiv = styled.div`
  display: flex;
  height: 20vh;
  justify-content: space-evenly;
  width: calc(.85 * 85vw);
`