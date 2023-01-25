import React from 'react'
import { DiscIcon, DividerDisc } from '../../style/ExtraDetailStyle'
const Disc = ({track}) => {
  return(
    <>
      {(track.disc_number !== 1 && track.track_number === 1) ?
          <DividerDisc>
            <DiscIcon />
            Disc {track.disc_number} 
          </DividerDisc>
        :
          null
      }
    </>
  )
}

export default Disc