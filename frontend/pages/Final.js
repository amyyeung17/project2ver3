import React from 'react'
import { Outlet } from 'react-router-dom'
import NavOptions from '../elements/NavOptions'
import NavSubOptions from '../elements/NavSubOptions'
import { RowDiv, LeftDiv, RightDiv } from '../Shared'

const Final = ({resetStates}) => {

  return(
    <>
      <RowDiv> 
        <LeftDiv> 
          <NavSubOptions
            options={['results', 'inputs']}
            swap={window.location.pathname.split('/')[3]}
          />
        </LeftDiv>
        <RightDiv> 
          <Outlet />
        </RightDiv>
      </RowDiv>
      <NavOptions action={resetStates} location="/" text="Start over" />
    </>
  )
}

export default Final