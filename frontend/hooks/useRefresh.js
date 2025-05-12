import { useEffect } from 'react'
import { redirect, createSearchParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getError } from '../functions/getError'

const useRefresh = ({setEmotion, setSeed, pathname, refresh}) => {
  const navigate = useNavigate()
  useEffect(() => {
    const getRefresh = async () => {
      try {
        const { data } = await axios.get('/prev/refresh')
        if (data.type !== 'empty') {
          setSeed(data.prevSeed)
          if (data.type === 'emotion') {
            setEmotion(data.emotion)
          }
        }
        if (pathname === '/details') {
          const { data } = await axios.get('/prev/extra')
          const { uri, songState } = data
          redirect({pathname: '/details', search: createSearchParams({uri})}, {state: songState})
        }
      } catch(err) {
        navigate('/error', getError({...err}))
      }
    }
    if (typeof(refresh) === 'undefined') {
      getRefresh()
    }
  }, [])

}

export default useRefresh