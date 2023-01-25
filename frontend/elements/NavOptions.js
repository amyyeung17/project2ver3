import React from 'react'
import { useNavigate } from "react-router-dom"
import { NavButton } from '../style/ExtraStyle'

const NavOptions = ({action = () => void 0, direction = 1, length = -1, 
    location, text, value}) => {
  const navigate = useNavigate()

  return(
    <>
      <NavButton
        disabled={length === 0}
        text={text} 
        onClick={() => {action(value); navigate(location, {state: direction})}}
      > 
        { text }  
      </NavButton>
    </>
  )

}

export default React.memo(NavOptions)