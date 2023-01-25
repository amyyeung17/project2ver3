import React from 'react'
import { useLocation } from 'react-router-dom'
import { NoHeaderDiv, Title, Subtitle } from '../Shared'
import NavOptions from '../elements/NavOptions'

const ErrorPage = ({resetStates}) => {
  const { state } = useLocation()

  return(
    <>
      <NoHeaderDiv>
        <Title> Error! </Title>
        <Subtitle> 
          An error has been encountered: 
          {(!(state >= 1) && state !== null) && 
            ` ${typeof(state.error.message) !== 'undefined' ? state.error.message : state.error }. `
          }
          Please return to the homepage.
        </Subtitle>
        <Subtitle> 
          {(!(state >= 1) && state !== null) && 
            `Type of error: ${state.errorType}. Status code: ${state.status} `
          }
        </Subtitle>
        <NavOptions  action={resetStates} text="Return" location="/welcome" direction={2} />
      </NoHeaderDiv>
    </>
  )
}

export default ErrorPage