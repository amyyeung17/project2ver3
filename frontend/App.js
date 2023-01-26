import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate, Route, Routes, useLocation, redirect, createSearchParams } from "react-router-dom"
import axios from 'axios'
import { AnimatePresence } from "framer-motion";
import Curate from './pages/Curate'
import { Past, Search, Selected } from './curate/PageComponents'
import Info from './pages/Info'
import EmotionIntensity from './pages/EmotionIntensity'
import EmotionValence from './pages/EmotionValence'
import ExtraDetails from './pages/ExtraDetails'
import ErrorPage from './pages/ErrorPage'
import Final from './pages/Final'
import { Inputs, Results } from './final/PageComponents'
import MainHeader from './elements/MainHeader'
import Navbar from './elements/Navbar'
import Credits from './elements/Credits'
import NotFound from './pages/NotFound'
import Welcome from './pages/Welcome'
import { AppOrganizeDiv } from './Shared'
import axios from 'axios'
import { getError } from './functions/getError'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname, state } = useLocation()
  const [emotion, setEmotion] = useState({valence: 0, intensity: 0, retrievedSeed: false, status: 'status', avgValence: 0, avgIntensity: 0})
  const [seed, setSeed] = useState([])
  const [refresh, setRefresh] = useState(true)

 
  //Retrieves access token from Spotify API
  //https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/
  useEffect(() => {
    const fetchToken = async() => {
      try {
        const { data } = await axios.post('/project2/.netlify/functions/server/spotify/token')
        if (data.message === 'Token already made' && refresh) {
          const { data } = await axios.get('/project2/.netlify/functions/server/prev/refresh')
          setRefresh(false)
          if (data.type !== 'empty') {
            setSeed(data.prevSeed)
            if (data.type === 'emotion') {
              setEmotion(data.emotion)
            }
          }
          if (pathname === '/details') {
            const { data } = await axios.get('/project2/.netlify/functions/server/prev/extra')
            const { uri, songState } = data
            //redirect({pathname: '/details', search: createSearchParams({uri})}, {state: songState})
          }
        }
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
  
    if (((pathname === '/welcome' || pathname === '/') && (state == null || state === 2)) || refresh) {
      fetchToken()
    }
  }, [state])

  /**
   * If page is refreshed, retrieves cookie data if available: access token & past inputs.
   * If pathname is /details, retrieves song details with uri from again before redirecting.    
   * 
   * TODO - why did i check if state is undefined?, do i need the refresh for the '/details'?? 
   * 
   * CHECK this - when first entering a page
   */


  //  useRefresh({setEmotion, setSeed, pathname, restart: state}) original line??? 

  /**
   * callback function that edits the emotion state
   * @function editEmotion
   * @param {Object} params 
   * @param {string} params.type - which action to take (user inputs, recommended average based on seed, seed is edited & requires retrieval of avg values, set retrieval status)
   * @param {number} [params.value]
   * @param {number} [params.avgIntensity]
   * @param {number} [params.avgValence]
   */
  const editEmotion = ({type, ...props}) => {
    if (type === 'valence' || type === 'intensity') {
      const { value } = props
      setEmotion(e => ({...e, [type]: value}))
    } else if (type === 'avg') {
      const { avgIntensity, avgValence } = props
      setEmotion(e => ({...e, valence: avgValence, intensity: avgIntensity, avgValence, avgIntensity}))
    } else {
      if (type === 'seed') {
        setEmotion(e => ({...e, retrievedSeed: false}))
      } else {
        setEmotion(e => ({...e, retrievedSeed: true, status: (type === 'loading' ? 'Loading...' : 'Complete')}))
      }
    }
  }


  /**
   * callback function that edits the seed state
   * @function editSeed
   * @param {Object} params
   * @param {string} [params.type = ''] - which action to take (removes existing track from seed, adds new track, stored seed is updated with respective valence & intensity values)
   * @param {object} [params.track] - new values to set 
   * @param {Array<object>} [params.newSeed] - new values to set 
   */
  const editSeed = ({type = '', ...props}) => {
    switch(type) {
      case 'delete':
        setSeed(s => s.filter(t => t.id !== props.track.id))
        break
      case 'add':
        setSeed(s => [...s, props.track])
        break
      case 'edited':
        setSeed(props.newSeed)
        break
    }
  }

  //resets seed and emotion states when user choice of starting over or encountering an error
  const resetStates = () => {
    setSeed([])
    setEmotion({valence: 0, intensity: 0, retrievedSeed: false, status: 'status', avgValence: 0, avgIntensity: 0})
  }

  return(
    <>
      <AppOrganizeDiv>
        <Navbar />
        <MainHeader location={pathname} />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Navigate replace to="/welcome" />} /> 
            <Route path="welcome" element={<Welcome /> } />
            <Route path="curate" element={ <Curate refresh={refresh} seed={seed} editEmotion={editEmotion} />} >
              <Route path="search" element={<Search />} />
              <Route path="selected" element={<Selected seed={seed} editSeed={editSeed}/>} />
              <Route path="past" element={<Past />}/>
            </Route>
            <Route path="valence" element={ <EmotionValence emotion={emotion} seed={seed} editSeed={editSeed} editEmotion={editEmotion} />} />
            <Route path="intensity" element={<EmotionIntensity emotion={emotion} seed={seed} editEmotion={editEmotion} />} />
            <Route path="final" element={ <Final resetStates={resetStates} /> } >
              <Route path="results" element={ <Results emotion={emotion} seed={seed} /> } />
              <Route path="inputs" element={ <Inputs emotion={emotion} seed={seed} /> } />
            </Route>  
            <Route path="info" element={ <Info /> } />
            <Route path="details" element={<ExtraDetails emotion={emotion} seed={seed} editSeed={editSeed} />} />
            <Route path="error" element={<ErrorPage resetStates={resetStates} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        {pathname !== '/welcome' &&
          <Credits />
        }
      </AppOrganizeDiv>
    </>
  )
}

export default App