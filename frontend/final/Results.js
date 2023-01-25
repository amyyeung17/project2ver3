import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AnimatePresence } from "framer-motion"; 
import Songs from './subcomponents/Songs'
import NavPage from '../elements/NavPage'
import getCurrent from '../functions/getCurrent'
import { getError } from '../functions/getError'
import { FinalDiv, ResultText } from '../style/FinalStyle'
import { LoadText } from '../style/ExtraStyle'

//TODO - check to see if key value works for AnimatePresence
//TODO - removed FinalDiv from loadingtext? 
const Results = ({emotion, seed}) => {
  const navigate = useNavigate()
  const [results, setResults] = useState([])
  const [stat, setStat] = useState('')
  const [page, setPage] = useState(0)
  const { currentResults, pageNum, lastNum } = getCurrent({items: results, page})

  //Retrieve recommended songs based on the final inputs of seeded songs and emotion values.
  useEffect(() => {
    const getResults = async() => {
      setStat('Loading...')
      try {
        const { data } = await axios.post('/project2/.netlify/functions/server/spotify/recommend', {emotion, seed})
    
        if (data.tracks.length !== 0) {
          setStat('Complete')
          setResults(data.tracks)
        } else {
          setStat('No results')
        }
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    if (seed.length !== 0) {
      getResults()
    }
  }, [seed])

  return(
    <>
      <AnimatePresence> 
        {(stat !== 'Loading...' && stat !== 'No results') ?
          <>
            <ResultText> Showing {pageNum + 1}-{lastNum} of {results.length} results </ResultText>
            <Songs contentLength={currentResults.length} keyValue={page + 'page'} songType="results" tracks={currentResults}/>
            <NavPage items={results} page={page} editPage={setPage} />
          </>
        :
          <FinalDiv content={0}> 
            <LoadText> {stat}</ LoadText>
          </FinalDiv>
        }
      </AnimatePresence>
    </>
  )
}

export default Results