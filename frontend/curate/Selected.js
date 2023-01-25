import React from 'react'
import TrackDetails from '../tracks/TrackDetails'
import { CurateSongsDiv, DeleteButton } from '../style/CurateStyle'
import { LoadText } from '../style/ExtraStyle'

/**
 * Where selected songs appear, user can expand on more details or delete unwanted ones. 
 * @param {{seed: Array, editSeed: function()}} param  
 */
const Selected = ({seed, editSeed}) => {


  return(
    <>
      <CurateSongsDiv content={seed.length} type="selected">
        {seed.length !== 0 ?
          seed.map((track) => {
          return(
            <React.Fragment key={track.id}>
              <TrackDetails
                content={seed.length} 
                track={track}
                type="curateSelected"
              >
                <DeleteButton onClick={() => editSeed({type: 'delete', track})} />
              </TrackDetails>
            </React.Fragment>
          )})
        :
          <>
            <LoadText> Selected songs will appear here. </LoadText>
            <LoadText> Please select at least one to continue.  </LoadText>
          </>
        }  
      </CurateSongsDiv>
    </>
  )
}

export default React.memo(Selected)

