import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { organizeJustifyStart, smallHeader } from '../Shared'
import { allSongsDiv } from './CurateStyle'
import { staggerChild, staggerParent } from './transitions'

export const FinalDiv = styled(motion.div).attrs(staggerParent)`
  ${allSongsDiv}
  margin-top: ${props => props.type === 'inputs' && '1rem'};
  overflow-y: hidden;
`

export const InputEmotionsDiv = styled(motion.div).attrs(staggerParent)`
  ${organizeJustifyStart};
  overflow-y: hidden;
  width: 85.5%;
`

export const InputNavLink = styled(Link)`
  align-self: flex-end;
  position: relative;
  margin-top: ${props => props.type === 'curate' && '.5rem'};
  right: ${props => props.type == 'curate' ? '5.4275%' : '5%'}; 
  text-decoration: none;
`

export const InputSectionDiv = styled(motion.div).attrs(staggerChild)`
  ${organizeJustifyStart};
  margin: .5rem 0rem;
  position: relative;
  width: 100%;
`

export const ResultText = styled.p`
  ${smallHeader}
  left: 5%;
`