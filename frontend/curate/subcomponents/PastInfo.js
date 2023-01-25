import React from 'react'
import { PastInfoDiv } from '../../style/CurateStyle'
import { HiddenButton, SimpleInfoTitle } from '../../style/TrackStyle'
import SimpleTrackDetails from '../../tracks/SimpleTrackDetails'


const PastInfo = ({infoSet, sectionType, setTemp}) => {
  return(
    <>
      {infoSet.map((i, index) => {
        return(
          <PastInfoDiv key={sectionType + index} num={index + 1} length={infoSet.length} sectionType={sectionType}>
            {sectionType === 'pastInputs' ?
              <>
                <HiddenButton onClick={() => setTemp(i)} /> 
                <SimpleInfoTitle> {i} </SimpleInfoTitle>
              </>
            :
              <SimpleTrackDetails type="past" track={i} />
            }
          </PastInfoDiv>
        )}) 
      }
    </>
  )
}

export default PastInfo