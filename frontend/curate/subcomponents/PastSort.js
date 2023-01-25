import React from 'react'
import { PastIconDiv, PastTitleDiv, PastIconButton } from '../../style/CurateStyle'

//TODO - check to see if anon f(x) is still needed
const PastSort = ({infoSet, reverseState, handleReverse}) => {
  return(
    <>
      <PastTitleDiv> 
         Last 10 searches 
        <PastIconDiv>
          {reverseState ? 'Ascending' : 'Descending'} 
          {typeof(infoSet) !== 'undefined' &&
            <PastIconButton disabled={infoSet.length === 0} reverse={reverseState} onClick={() => handleReverse()} />
          }
        </PastIconDiv>
      </PastTitleDiv>
    </>
  )
}

export default PastSort