import React from 'react'
import { NoHeaderDiv, Title, Subtitle } from '../Shared'
import NavOptions from '../elements/NavOptions'

const NotFound = () => {
  return(
    <>
      <NoHeaderDiv>
        <Title> Page not found </Title>
        <Subtitle> 
          The page you are trying to access does not exist. 
          Please return to the welcome page.
        </Subtitle>
        <NavOptions text="Return" location="/welcome" />
      </NoHeaderDiv>
    </>
  )
}

export default NotFound