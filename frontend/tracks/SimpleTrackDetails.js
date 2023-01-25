import React from 'react'
import { HiddenButtonLink, SimpleAlbumImage, SimpleAlbumHolder, SimpleInfoDiv, 
  SimpleInfoArtist, SimpleInfoTitle, TrackTitleDiv, TrackTitleIcon } from '../style/TrackStyle'
import getLink from '../functions/getLink'
import Spotify from './Spotify'
import { getArtists } from '../functions/getMultiple'

/**
 * Simplified version of TrackDetails.js used in '/curate/search', '/curate/past', and '/details?'.
 * (Past.js, SearchResults.js, TemplateTracks.js).
 */
const SimpleTrackDetails = ({track, type, ...props}) => {
  const linkInfo = {...getLink({track, location: location.pathname, original: (location.pathname !== '/details' ? location.pathname : props.original)})}
  const selectedTrack = ((type === 'albums' || type === 'artists') && props.uri === track.id)
  
  return(
    <>
      <HiddenButtonLink $selected={selectedTrack} to={!selectedTrack ? linkInfo[0] : '#'} state={{...linkInfo[1].state}} /> 
      {type !== 'albums' &&
        (track.album.images.length !== 0 ?
          <SimpleAlbumImage src={track.album.images[1].url} />
          :
          <SimpleAlbumHolder type={type}> No image </SimpleAlbumHolder>
        )
      }
      <SimpleInfoDiv selectedTrack={selectedTrack} type={type}>
        <TrackTitleDiv selectedTrack={selectedTrack}> 
          <SimpleInfoTitle> 
            {(type === 'albums' ? (props.num) + '. ' : '') + track.name} 
          </SimpleInfoTitle>
          {track.explicit && <TrackTitleIcon />}
        </TrackTitleDiv>
         <SimpleInfoArtist> {getArtists(track.artists)}  </SimpleInfoArtist>
      </SimpleInfoDiv>
      <Spotify type={type} track={track} />
    </>
  )
}

export default SimpleTrackDetails