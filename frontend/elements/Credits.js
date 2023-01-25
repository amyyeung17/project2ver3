import React from 'react'
import { CreditButton, CreditButtonDiv, CreditDiv, CreditLink, CreditLinkDiv } from '../style/ExtraStyle'
import { SpotifyImage } from '../style/TrackStyle'
import image from '../elements/Spotify_Icon_RGB_Green.png'
const Credits = () => {
  return(
    <>
      <CreditDiv>
        <CreditLinkDiv> 
          <CreditLink href="https://developer.spotify.com/documentation/web-api/reference/#/" target="_blank" > 
            Made with Spotify API 
          </CreditLink>
          <CreditLink href="https://developer.spotify.com/documentation/web-api/reference/#/" target="_blank" > 
            <SpotifyImage src={image} />  
          </CreditLink>
        </CreditLinkDiv>
        <p style={{color: '#2c484e', margin: '1rem 0rem .25rem'}}> 
          Developed with 
          <span className="bi bi-heart-fill" style={{margin: '0rem .25rem'}}></span> 
          by Amy Yeung.
        </p>
        <CreditButtonDiv> 
          <CreditButton color="reverse" href="https://www.ayeung.me">
            <span className="bi bi-folder-fill"> </span>
          </CreditButton>
          <CreditButton color="reverse" href="https://github.com/amyyeung17">
            <span className="bi bi-github"> </span>
          </CreditButton>
          <CreditButton color="reverse" href="mailto:amyyeung17@gmail.com">
            <span className="bi bi-envelope-fill"> </span>
          </CreditButton>
        </CreditButtonDiv>
      </CreditDiv>
    </>
  )
}

export default React.memo(Credits)