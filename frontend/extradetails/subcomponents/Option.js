import React from 'react'
import * as E from '../../style/ExtraDetailStyle'
import { IconButton } from '../../Shared'

/**
 * TODO - params
 * Options to display more or less tracks in TemplateTracks.
 */
const Option = ({infoType, show, toggleShow, ...props}) => { 

  const altText = (
    infoType === 'albums' ? `Show all tracks (${props.totalTracks})` : 'Show top tracks'
  )
   

  return(
    <>
      <E.OptionDiv infoType={infoType}> 
        <E.Text purpose="label"> 
          {show ? 'Hide tracks' : altText} 
        </E.Text>
        <IconButton 
          className={`bi bi-arrow-${show ? 'up' : 'down'}-short`} 
          onClick={() => toggleShow(t => !t)} 
        />
      </E.OptionDiv> 
    </>
  )
}

export default Option