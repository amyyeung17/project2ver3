import React from 'react'
import { Icon, NavbarDiv, NavbarButton } from '../style/ExtraStyle'

const Navbar = () => {
  return(
    <>
      <NavbarDiv>
        <NavbarButton color="reverse" to={{pathname: '/welcome'}} state={-2}> 
          <Icon $iconType="house"/> 
          Home 
        </NavbarButton>
        <NavbarButton color="reverse" to={{pathname: '/info'}}> 
          <Icon $iconType="info"/> 
          Info
        </NavbarButton>
      </NavbarDiv>
    </>
  )
}

export default Navbar