import React from 'react'
import { ImageLink, SpotifyImage, SpotifyBubbleDiv } from '../style/TrackStyle'
import image from '../elements/Spotify_Icon_RGB_Green.png'
import image2 from '../elements/Spotify_Logo_RGB_Green.png'

/**
 * Button with Spotify logo that navigates to a relevant page.
 */
const Spotify = ({type = 'normal', track, ...props}) => {

  return(
    <>
      <React.Fragment key={(type === 'artists' || type === 'albums') && track.id}> 
        <ImageLink
          href={type === 'main' ? props.link : track.external_urls.spotify}
          target="_blank"
        > 
          <SpotifyImage
            type={type}
            src={(type !== 'template' && type !== 'main') ? image : image2 }
          />
        </ImageLink>
        {['curateResults', 'past', 'artists', 'albums'].includes(type) &&
          <SpotifyBubbleDiv type={type}> {type === 'curateResults'  ? 'Open Spotify' : 'Spotify'} </SpotifyBubbleDiv>
        }
      </React.Fragment>
    </>
  )
}

export default React.memo(Spotify)