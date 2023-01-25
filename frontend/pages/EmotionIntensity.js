import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import Slider from '../elements/Slider'
import Options from '../emotion/Options'
import NavOptions from '../elements/NavOptions'
import { EmotionDiv, EmotionText } from '../style/EmotionStyle'
import { NavDiv } from '../Shared'

const EmotionIntensity = ({ emotion, seed, editEmotion}) => {
  const { state } = useLocation()
  const [intensity, setIntensity] = useState(state)
  const setValue = (value) => {
    editEmotion({type: 'intensity', value})
  }

  return(
    <>
      <EmotionDiv custom={window.location.pathname !== '/welcome' && window.location.pathname !== '/info' ? intensity : 0}> 
        <Slider type="intensity" value={emotion.intensity || 0} setValue={setValue} />
        {emotion.status !== 'Loading...' &&
          <EmotionText>
            Based on your selection, your suggested intensity value is 
            <span style={{fontWeight: 450}}> {emotion.avgIntensity} </span>
          </EmotionText>
        }
        <Options emotion={emotion} seed={seed} type="intensity" value={emotion.intensity} />
      </EmotionDiv>
      <NavDiv>
        <NavOptions
          action={setIntensity}
          direction={-1}
          location="/valence"
          text="Previous"
          value={-1}
        />
        <NavOptions
          location="/final/results"
          text="Curate"
        />
      </NavDiv>
    </>
  )
}

export default EmotionIntensity