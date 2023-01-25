import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import EmotionTracks from './EmotionTracks'
import NavSubOptions from '../elements/NavSubOptions'
import { AnimatedText, EmotionIconButton, EmotionButton } from '../style/EmotionStyle'
import { getError } from '../functions/getError'

/**
 * TODO - emotion params & seed params
 * @param {*} param0 
 * Changes which components are shown depending on the drop state.
 * If false, shows short description and an option to show the songs.
 * If true, tracks are displayed in the EmotionTracks component and menu bar is contained in NavSubOptions. 
 */
const Options = ({emotion, seed, type, value}) => {
  const navigate = useNavigate()
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState('')
  const [swap, setSwap] = useState('select')
  const [drop, setDrop] = useState(false)


  /**
   * Retrieves and updates sample songs of the current valence || intensity value on the slider.
   * Sample songs are recommended based on seeded songs. 
   */
  useEffect(() => {
    const getEmotion = async () => {
      setStatus('Loading...')
      try {
        const { data } =  await axios.post('/project2/.netlify/functions/server/spotify/sample', {seed, type, value})
        if (data.tracks.length !== 0) {
          setInfo(data.tracks)
          setStatus('Complete')
        } else {
          setStatus('No results.')
        }
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    if (seed.length !== 0) {
      getEmotion()
    }
  }, [value])

  const detailProps = (
    swap === 'sample' ?
      {modNum: 5, status, trackSet: info, value}
    :
      {modNum: seed.length, status: emotion.status, trackSet: seed}
    )

  return(
    <>
      {drop ?
        <>
          <NavSubOptions toggleSwap={setSwap} options={['sample', 'select']} swap={swap}>
            <EmotionIconButton onClick={() => setDrop(false)} /> 
          </NavSubOptions>
          <EmotionTracks 
            emotion={emotion} 
            swap={swap}
            type={type}
            {...detailProps} 
          />
        </>
      :
        <>
          <AnimatedText dropstyle="nodrop" key="eheader">
            See your/sample songs and their associated {type} values.
          </AnimatedText>
          <EmotionButton onClick={() => setDrop(true)}> 
            Show songs
          </EmotionButton>
        </>
      }
    </>
  )
}

export default Options

