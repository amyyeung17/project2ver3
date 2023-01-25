import React from 'react'
import getLink from '../functions/getLink'
import { getArtists } from '../functions/getMultiple'
import { AlbumImage, AlbumHolder, HiddenDiv, Links,
  MetadataDiv, TrackTitleIcon, TrackTextLightDiv, TrackTitleText, 
  TrackTitleDiv} from '../style/TrackStyle'
import MetadataLinks from './MetadataLinks'

/**
 * 
 * Metadata information and links for TrackDetails.js. 
 */
const Metadata = ({type = 'normal', track}) => {
  const linkInfo = {...getLink({track, location: location.pathname, original: location.pathname})}
  
  return(
    <>
      {track.album.images.length !== 0 ?
        <AlbumImage src={track.album.images[1].url} />
        :
        <AlbumHolder> No image </AlbumHolder>
      }
      <MetadataDiv type={type}>
        <TrackTitleDiv type={type}>
          <TrackTitleText type={type}> { track.name } </TrackTitleText>
          { track.explicit && <TrackTitleIcon /> }
        </TrackTitleDiv>
        <TrackTextLightDiv> {getArtists(track.artists)} </TrackTextLightDiv> 
        <HiddenDiv>
          <MetadataLinks track={track} />
          <Links to={linkInfo[0]} state={{...linkInfo[1].state}}> More info </Links>
        </HiddenDiv>
      </MetadataDiv>
    </>
  )
}

export default Metadata