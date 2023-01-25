import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavSubButton, NavSubDiv } from '../style/ExtraStyle'

/**
 * 
 * Template of options for any of the pages that require some kind of selection.
 */
const NavSubOptions = ({children, options, swap, toggleSwap}) => {
  const navigate = useNavigate()

  const getText = (type) => {
    switch(type){
      case 'results':
        return 'Results'
      case 'inputs':
        return 'Your inputs'
      case 'sample':
        return 'Sample'
      case 'select':
        return 'Selected'
      case 'search':
        return 'Search'
      case 'selected':
        return 'Selected songs'
      case 'past':
        return 'Past searches'
      case 'pastInputs':
        return 'Inputs'
      case 'pastTracks':
        return 'Tracks'
      case 'inputsSongs':
        return 'Tracks'
      case 'inputsEmotions':
        return 'Emotions'
    }
  }

  return(
    <>
      <NavSubDiv navsubType={options[0]}>
        {children} 
        {options.map((op, index) => {
          return(
            <NavSubButton
              key={op + index}
              value={op}
              actual={swap}
              onClick={() => {(options[0] === 'results' || options[0] === 'search')  ? navigate((options[0] === 'results' ? '/final/' : '/curate/') + op) : toggleSwap(op)}}
            >
              {getText(op)}
            </NavSubButton>
          )
        })}
      </NavSubDiv>
    </>
  )
}

export default React.memo(NavSubOptions)