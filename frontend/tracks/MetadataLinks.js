import React from 'react'
import { TrackText, MetadataLink } from '../style/TrackStyle'
import { TextSpan } from '../Shared'

/**
 * Links of information for Metadata.js.
 */
const MetadataLinks = ({track}) => {

  return(
    <>
      <TrackText> Artist(s): &nbsp;
        {track.artists.map((artist, index) => {
          return(
            <TextSpan key={index}>
              <MetadataLink href={artist.external_urls.spotify} target="_blank"> 
                {artist.name} 
              </MetadataLink>
              {index === track.artists.length - 1 ? '' :  ', '}
            </TextSpan>
          )
        })} 
      </TrackText>
      <TrackText> Album: &nbsp;
        <TextSpan> 
          <MetadataLink href={track.album.external_urls.spotify} target="_blank"> 
            {track.album.name} 
          </MetadataLink>
        </TextSpan>
      </TrackText>   
    </>
  )
}

export default React.memo(MetadataLinks)