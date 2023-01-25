import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MainSliderButton, MainSliderLink, MainSliderText, MainSliderTextDiv } from '../../style/ExtraDetailStyle'

const SliderInfo = ({type}) => {
  const [display, setDisplay] = useState(false)

  const link = 'https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features'
  const text = (type === 'valence' ? 'Pace, perceived loudness, activity' : 'Perceived positivity')

  return(
    <>
      <MainSliderTextDiv> 
        <MainSliderButton onClick={() => setDisplay(d => !d)} />
        <AnimatePresence> 
          {display &&
            <>
              <MainSliderText> { text } </MainSliderText>
              <MainSliderLink href={link} target="_blank"> More info </MainSliderLink>
            </>
          }
        </AnimatePresence>
      </MainSliderTextDiv>
    </>
  )
}

export default React.memo(SliderInfo)