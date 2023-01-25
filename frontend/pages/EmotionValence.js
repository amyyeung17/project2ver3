import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import axios from 'axios'
import Slider from '../elements/Slider'
import Options from '../emotion/Options'
import NavOptions from '../elements/NavOptions'
import { EmotionDiv, EmotionText } from '../style/EmotionStyle'
import { NavDiv } from '../Shared'
import { getError } from '../functions/getError'

const EmotionValence = ({emotion, seed, editSeed, editEmotion}) => {
  const { state } = useLocation()
  const [valence, setValence] = useState(state)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    const getSeed = async () => {
      try {
        editEmotion({type: 'loading'})
        const { data } = await axios.post('/project2/.netlify/functions/server/spotify/stats', { seed })
        const { newSeed, avgIntensity, avgValence } = data
        editSeed({type: 'edited', newSeed})
        editEmotion({type: 'avg', avgIntensity, avgValence})
        editEmotion({type: 'complete'})
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    if (seed.length !== 0 && !emotion.retrievedSeed) {
      getSeed()
    } 
  }, [seed])

  const setValue = (value) => {
    editEmotion({type: 'valence', value})
  }

  return(
    <>
      <EmotionDiv custom={window.location.pathname !== '/welcome' && window.location.pathname !== '/info' ? valence : 0}>
        <Slider type="valence" value={emotion.valence || 0} setValue={setValue} />
        {emotion.status !== 'Loading...' &&
          <EmotionText>
            Based on your selection, your suggested valence value is 
            <span style={{fontWeight: 450}}> {emotion.avgValence} </span>
          </EmotionText>
        } 
        <Options emotion={emotion} seed={seed} type="valence" value={emotion.valence} />
      </EmotionDiv>
      <NavDiv>
        <NavOptions
          action={setValence}
          direction={-1}
          location="/curate/search"
          text="Previous"
          value={-1}
        />
        <NavOptions
          action={setValence}
          location="/intensity"
          text="Next"
          value={1}
        />
      </NavDiv>
    </>
  )
}

export default EmotionValence