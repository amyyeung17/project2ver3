import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"
import TrackDetails from '../tracks/TrackDetails'
import { IconButton } from '../Shared'
import { AnimatedText, EmotionTracksDiv } from '../style/EmotionStyle'
import { LoadText } from '../style/ExtraStyle'

//check to see if props.value affects rendering when on select
/**
 * TODO - emotion params
 * Track component for EmotionIntensity,js and EmotionValence.js. 
 * Enter animation slides the component from the right and leaves fading to the left of the window.
 * Loops through up to 5 songs of selected songs based the swap state (select, sample).
 */
const EmotionTracks  = ({emotion, modNum, status, trackSet, swap, type, ...props}) => {
  const [counter, setCounter] = useState(0)

  const text = (swap === 'select' ? 
    `Selected songs have the ${ type } value of: `
    :
    `Based on your selection, similar songs with the ${ type } value of `
  )

  return(
    <>
      <AnimatedText>
        { text }
        <span style={{fontWeight: 450, color: '#2c484e'}}> 
          {swap === 'select' ? trackSet[counter % modNum][type] :  props.value } 
        </span>
      </AnimatedText>
      <EmotionTracksDiv> 
        {(status !== 'Loading...' && trackSet.length !== 0) ?
          <AnimatePresence exitBeforeEnter>
            <React.Fragment key={type + (counter % modNum)}> 
              <TrackDetails track={trackSet[counter % modNum]} type="emotionTracks" />
            </React.Fragment>
          </AnimatePresence>
         
        :
          <LoadText stat={'emotion'}> {status} </LoadText>
        }
        <IconButton 
          type="emotion"
          disabled={trackSet.length === 1}
          className="bi bi-arrow-right"
          onClick={() => setCounter(c => c + 1)} 
        />
      </EmotionTracksDiv>
    </>
  )

}

export default React.memo(EmotionTracks)
