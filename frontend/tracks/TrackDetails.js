import React from 'react'
import Metadata from './Metadata'
import Spotify from './Spotify'
import { AllTracksDiv } from '../style/TrackStyle'

/**
 * 
 * Track details. Used in '/curate/selected', songs in the emotion input pages ('/intensity', '/valence'), and results ('/results). 
 * (Selected.js, Inputs.js, EmotionTracks.js, Results.js).
 */
const TrackDetails = ({content = 0, children, type, track}) => {

  return(
    <> 
      <AllTracksDiv
        content={content}
        type={type}
        whileHover={{maxHeight: '100%', transition: {ease: 'easeIn', duration: .35}}} 
      >
        {children}
        <Metadata type={type} track={track} />
        <Spotify type={type} track={track} />
      </AllTracksDiv>
    </>
  )
}

export default React.memo(TrackDetails)

