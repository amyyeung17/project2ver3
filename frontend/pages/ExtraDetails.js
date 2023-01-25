import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Albums, Artists, MainDetails, TrackSlider } from '../extradetails/PageComponents'
import { getError } from '../functions/getError'
import { LoadText } from '../style/ExtraStyle'


const ExtraDetails = ({emotion, seed, editSeed}) => {
  const { state, search } = useLocation()
  const navigate = useNavigate()
  const urlSearchParams = new URLSearchParams(search);
  const { uri } = (window.location.href.includes('/details') && Object.fromEntries(urlSearchParams.entries()));
  const [extra, setExtra] = useState([])
  const [status, setStatus] = useState('')
  

  useEffect(() => {
    const getExtra = async () => {
      setStatus('Loading...')
      try {
        const { data } = await axios.post('/project2/.netlify/functions/server/spotify/extra', { songState: state, uri })
        setExtra(data)
        setStatus('Complete')
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    if (typeof(uri) !== 'undefined') {
      getExtra()
    }
  }, [uri])

  return(
    <>
      {(state !== null && state !== 1) &&
        <>
          <MainDetails extra={extra} seed={seed} status={status} trackState={state} editSeed={editSeed} emotion={emotion}/>
          {status === 'Complete' ?
            <>
              <TrackSlider values={extra.features} />
              <Albums album={{...extra.track.album, tracks: extra.album}} uri={uri}  />
              <Artists artists={extra.artists} uri={uri}/>
            </>
          :
            <LoadText> { status } </LoadText>
          }
        </>
      }
    </>
  )
}

export default React.memo(ExtraDetails)
