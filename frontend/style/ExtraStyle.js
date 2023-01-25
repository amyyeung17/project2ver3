import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { IconButton, mainColorButton, mainColorLink, normalSubtitle, 
  normalTitle, organizeAlignStart, organizeJustifyStart, organizeCenter, organizeRow, 
  organizeRowBetween, reverseColorButton, underlineText } from '../Shared'
import { transitionChild, transitionLoadText, transitionWelcome } from './transitions'
import { motion } from 'framer-motion'

export const HeaderDiv = styled.div`
  ${organizeAlignStart}
  margin-bottom: .5rem;
  max-width: 71.5rem;
  width: 82.5vw;
`

export const HeaderSubtitle = styled.p`
  ${normalSubtitle}
  margin: .25rem;
`

export const HeaderTitle = styled.h1`
  ${normalTitle}
  font-size: 3rem;
  margin: .25rem;
`

const clearStyle = css`
  align-self: flex-end; 
  right: 7.25%;
  position: relative;
  margin-top: .25rem;
`

export const Button = styled.button`
  ${props => props.color === 'reverse' ? reverseColorButton : mainColorButton};
  ${props => props.$iconType === 'trash' && clearStyle}
  align-items: center;
  border-color: ${props => ['pencil', 'trash', 'dash'].includes(props.$iconType) && '#2c484e'};
  display: inline-flex;
  font-size: 1rem;
  font-weight: 450;
  margin: ${props => props.$iconType === 'house' || props.$iconType === 'info' && '0rem 1rem'};
  padding: .5rem;
`

export const NavbarButton = styled(Button).attrs({as: Link})`
  text-decoration: none;
  margin: 0rem .5rem;
  opacity: .85;

  &:hover {
    background-color: #EEF0F0;
    opacity: 1;
  }
`

export const CreditButton = styled(NavbarButton).attrs({as: 'a'})`
`

export const CreditButtonDiv = styled.div`
  ${organizeRow}
  justify-content: space-evenly;
  max-width: 10rem;
`

export const CreditDiv = styled.div`
  ${organizeJustifyStart}
  bottom: 0%;
  box-sizing: border-box;
  margin: 3.5rem 0rem 0rem;
  padding: 1rem 1rem .25rem;
  position: relative;
`

export const CreditLink = styled.a`
  ${mainColorLink}
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  margin: 0rem .125rem;

  &:hover {
    opacity: 1;
  }
`

export const CreditLinkDiv = styled.div`
  align-items: center;
  display: flex;
  margin: .5rem 0rem;

  &:hover {
    opacity: .75;
  }
`

export const Icon = styled.span.attrs(props => ({className: 'bi bi-'+ props.$iconType}))`
  margin: 0rem .25rem;
`

export const InfoLink = styled.a`
  ${mainColorLink}
  display: inline;
  font-size: 1rem;
`

export const InfoList = styled.li`
  left: 3%;
  position: relative;
  opacity: .67;
`

export const InfoPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 85vw;
`

export const InfoSection = styled.h3`
  color: #2c484e;
  font-size: 1.125rem;
  left: 5.25%;
  position: relative;
  margin: 1rem 0rem .25rem;
  max-width: 75%;
`

export const InfoSectionSub = styled(InfoSection).attrs({as: 'p'})`
  color: black;
  font-size: .875rem;
  margin: .25rem 0rem .5rem;
  opacity: .67;
`

export const InfoText = styled.p`
  color: #212121;
  display: inline;
  left: 5%;
  position: relative;
  margin: .5rem 0rem;
  max-width: 85%;
`

export const LoadText = styled(motion.p).attrs(transitionLoadText)`
  align-self: ${props => props.stat === 'emotion' && 'center'};
  color: #2c484e;
  font-size: 1.75rem;
  font-weight: 450;
  text-align: center;
  margin: 0rem !important;
  width: 85%:
`

export const NavButton = styled.button`
  ${mainColorButton}
  font-size: 1.25rem;
  height: 2.75rem;
  margin: ${props => ['Back', 'Start over', 'Return'].includes(props.text) && '1.5rem 0rem .5rem'};
  width: 8.5rem;
  z-index: 1;

  ${props => (props.text === 'Start' || props.text === 'Return') &&
    css`
      font-size: 1.5rem;
      height: 3rem;
      width: 10rem;
    `
  }
`

export const NavbarDiv = styled.div`
  ${organizeRow}
  justify-content: flex-end;
  padding: .5rem 1rem;
  max-width: 73rem;
  min-width: 45rem;
  width: 85vw;
`

export const NavPageArrow = styled(IconButton).attrs(props => ({
  className: `bi bi-arrow-${props.direction}-short`}))`
`

export const NavPageDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0rem .5rem;
  width: 40%;
`

export const NavPageLink= styled.button`
  ${underlineText}
  font-size: 1.25rem;
`

export const NavPageOuter = styled.div`
  ${organizeRowBetween}
  justify-content: ${props => props.$both && 'flex-end'};
  margin-top: ${props => props.space === 'albums' && '.75rem'};
  width: 50%;
  z-index: 2;
`

const vertType = ['search', 'selected', 'results', 'inputs', 'past']
const rowType = ['select', 'sample', 'pastInputs', 'pastTracks', 'inputsSongs', 'inputsEmotions']
export const NavSubButton = styled.button`
  font-size: 1.125rem;
  padding .5rem;
  ${underlineText}

  ${props => rowType.includes(props.actual) &&
    css`
      margin: 0rem;
      text-underline-offset: 1vh;
    `
  }

  ${props => vertType.includes(props.actual) &&
    css`
      border-radius: 0rem;
      border-left: 4px solid transparent;
      margin: .25rem 0rem;
      padding-left: .375rem;
      text-decoration: none;
      text-align: left;
      width: 100%;

      ${props.actual === props.value ?
        css`
            background-color: #EEF0F0;
            border-left-color: #f2d0a4;
          `
        :
        css`  
            &:hover:enabled {
              border-left-color: #f2d0a4;
              background-color: #EEF0F0;
            }
          `
        }
    `
  }
`

export const NavSubDiv = styled.div`
  ${organizeRow}
  justify-content: space-evenly;

  ${props => {
    switch(props.navsubType) {
      case 'sample':
        return css`
          align-self: flex-start;
          margin: .5rem 0rem .25rem;
          width: 80%;
        `
      case 'results':
      case 'search':
        return css`
          ${organizeAlignStart}
          border-bottom: 1.5px solid #c7dadd;
          margin-bottom: .5rem;
          padding-bottom: .25rem;
      `
      case 'pastInputs':
      case 'inputsSongs':
        return css`
          margin-top: .5rem;
          width: 50%;
        `
    }
  }}
`

export const SliderDiv = styled.div`
  ${organizeCenter}
  margin-top: ${props => !props.$checkType && '1rem'};
  width: ${props => {
    if (props.$checkType) {
      return '47.5%'
    } else if (props.$inputType) {
      return '90%'
    } else {
      return '85vw'
    }
  }};
`

const trackFill = css`
  height: 1rem;
  border-radius: .5rem;
  background-color: transparent;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
`
export const SliderInput = styled.input.attrs({
  type: "range",
  min: 0,
  max: 10,
  step: 1
})`
  appearance: none;
  margin: 1rem .5rem;
  width: ${props => props.$bothType ? '85%' : '75%' };
  &::-webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    ${trackFill}
  };
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 50%;
    border: 2px solid gray;
    height: 1.5rem;
    width: 1.5rem;
    background: white;
    transform: translateY(-20%); 
    cursor: ${props => !props.$bothType && 'pointer'};
  }
`

export const SliderLabel = styled.label`
  align-self: flex-start;
  color: #2c484e;
  font-size: 1rem; 
  font-weight: 450;
  left: 9.75%;
  margin: .25rem 0rem;
  position: relative;
`

export const SliderTickDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: .5rem;
  width: ${props => props.$bothType ? '91.5%' : '81.5%' };
`

export const SliderTickText = styled.p`
  ${underlineText}
  font-size: ${props => (
    props.actual === props.value ?
      (props.$bothType ? '1rem' : '1.25rem')
    :
      (props.$bothType ? '.875rem' : '1rem')
  )};

  &:hover {
    opacity: 1;
    text-decoration-color: transparent;
  }
`

export const WelcomeButtonDiv = styled(motion.div).attrs(transitionChild)`
  ${organizeAlignStart}
  margin: .5rem;
  padding: .5rem 0rem;
  width: 60%;
`

export const WelcomeDiv = styled(motion.div).attrs(transitionWelcome)`
  ${organizeAlignStart}
  height: 65vh;
  margin: .5rem;
  width: 85vw;
`

export const WelcomeLink = styled(motion.a).attrs(transitionChild)`
  ${mainColorLink}
  font-size: 1.5rem;
  margin: 1rem .5rem;
`

export const WelcomeSubtitle = styled(motion.p).attrs(transitionChild)`
  ${normalSubtitle}
  text-align: left;
  width: 80%;
`

export const WelcomeText = styled(motion.p).attrs(transitionChild)`
  ${normalTitle}
  font-size: ${props => props.type === 'title' ? '5rem' : '2.75rem'};
`