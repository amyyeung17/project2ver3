import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import NavSubOptions from '../elements/NavSubOptions'
import IconTextButton from '../elements/IconTextButton'
import { PastSectionDiv } from '../style/CurateStyle'
import { LoadText } from '../style/ExtraStyle'
import { getError } from '../functions/getError'
import PastInfo from './subcomponents/PastInfo'
import PastSort from './subcomponents/PastSort'

/**
 * 
 * TODO - firstRef? 
 */
const Past = () => {
  const navigate = useNavigate()
  const [info, setInfo] = useState({pastTracks: [], pastInputs: []})
  const [reverse, setReverse] = useState({pastTracks: false, pastInputs: false})
  const [status, setStatus] = useState('')
  const [temp, setTemp] = useState('')
  const [sectionType, setSection] = useState('pastInputs')
  const firstRef = useRef(0)
  const currentInfo = info[sectionType]

  //Retrieve up to ten of the most recent searches and songs
  useEffect(() => {
    const getPast = async () => {
      setStatus('Loading...')
      try {
        const { data } = await axios.get('/project2/.netlify/functions/server/prev/past')
        const { pastTracks, pastInputs } = data
        firstRef.current = firstRef.current + 1
        setInfo({pastTracks: pastTracks.reverse(), pastInputs: pastInputs.reverse()})
        setStatus((pastTracks.length === 0 ? 'No searched songs' : 'Complete'))
        
      } catch(err) {
        navigate('/error', getError({...err}))
      }
    }
    getPast()
  }, [])

  //Runs after user clears song or track history (info state)
  useEffect(() => {
    const clearPast = async () => {
      try {
        await axios.post('/project2/.netlify/functions/server/search/updatepast', { info })
        if (info.pastTracks.length === 0) {
          setStatus('No searched songs')
        }
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }

    if (firstRef.current > 1) {
      clearPast()
    }
  }, [info])

  //Runs after user selects a previous input to replace current and navigates back to the search component
  useEffect(() => {
    const editInput = async () => {
      try {
        await axios.post('/project2/.netlify/functions/server/search/updateinput', { temp })
        navigate('/curate/search')
      } catch(err) {
        navigate('/error', getError({...err}))
      }
    }
    if (temp !== '') {
      editInput()
    }
  }, [temp])

  /**
   * Sorts info in reverse order of time 
   * @function editReverse 
   * @param {{sectionType: String}} params 
   */
  const editReverse = ({sectionType}) => {
    setInfo(i => ({...i, [sectionType]: i[sectionType].reverse()}))
    setReverse(r => ({...r, [sectionType]: !r[sectionType]}))
  }

  /**
   * Erases past entries or searches
   * @function editClear 
   */
  const editClear = () => {
    setInfo(i => ({...i, [sectionType]: []}))
    firstRef.current = firstRef.current + 1
  }


  return(
    <>  
      <NavSubOptions options={['pastInputs', 'pastTracks']} swap={sectionType} toggleSwap={setSection} />
      <PastSort infoSet={currentInfo} reverseState={reverse[sectionType]} handleReverse={() => editReverse({sectionType})} />
      <PastSectionDiv sectionType={sectionType} length={currentInfo.length}>
        {typeof(currentInfo) !== 'undefined' && currentInfo.length !== 0 ?
          <PastInfo infoSet={currentInfo} sectionType={sectionType} setTemp={setTemp}/>
          :
          <LoadText> {(sectionType === 'pastInputs' && status !== 'Loading...') ? 'No previous inputs' : status} </LoadText>
        }
      </PastSectionDiv>
      {typeof(currentInfo) !== 'undefined' &&
        <IconTextButton length={currentInfo.length === 0} color="reverse" iconType="trash" action={editClear} text="Clear" />
      }
    </>
  )
}

export default Past
