import React from 'react'
import TrackDetails from '../../tracks/TrackDetails'
import { FinalDiv } from '../../style/FinalStyle'

const Songs = ({contentLength, songType, tracks, ...props}) => {
  return(
    <>
      <FinalDiv content={contentLength} key={songType === 'results' && props.keyValue} type={songType}>
        {tracks.map((track) => {
          return(
            <React.Fragment key={track.id}> 
              <TrackDetails content={tracks.length} track={track} type={songType} />
            </React.Fragment>
          )
        })}
      </FinalDiv>
  </>
  )
}

export default Songs