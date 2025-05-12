import React from 'react'
import NavOptions from '../elements/NavOptions'
import { WelcomeButtonDiv, WelcomeDiv, WelcomeLink, 
  WelcomeSubtitle, WelcomeText} from '../style/ExtraStyle'

const Welcome = () => {
  const link = 'https://developer.spotify.com/documentation/web-api/reference/#/'
  return(
    <>
      <WelcomeDiv> 
        <WelcomeText type="text"> Jam to new mood matching tunes </WelcomeText>
        <WelcomeSubtitle> 
          Get track recommendations easily
          by choosing one or more song(s) that fit your current mood 
          and additional questions.
          {"\n"}
          Due to changes in Spotify API changes effective 11/27/2024, this app can no longer use the endpoints needed to return
          recommendations. Changes are to be determined. 
        </WelcomeSubtitle>
        <WelcomeLink href={link} target="_blank"> 
          Made with Spotify Web API. 
        </WelcomeLink>
        <WelcomeButtonDiv>
          <NavOptions location="/curate/search" text="Start" length={0} />
        </WelcomeButtonDiv>
      </WelcomeDiv>
    </>
  )
}

export default Welcome