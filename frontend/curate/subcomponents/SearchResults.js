import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CurateResultsDiv, OptionDiv, HeaderText } from '../../style/CurateStyle'
import getCurrent from '../../functions/getCurrent'
import SimpleTrackDetails from '../../tracks/SimpleTrackDetails'
import { getError } from '../../functions/getError'
import { LoadText } from '../../style/ExtraStyle'

const SearchResults = ({status, page, offset, prevOffset, items, editStatus, 
    getSearchLimited}) => {
  const navigate = useNavigate()
  const {currentResults, pageNum, lastNum} = getCurrent({items: (items.length !== 0 ? items.tracks : items), page})

  //Retrieves the previous or next available sets of results
  useEffect(() => {
    const getNavcurate = async () => {
      if (items.length !== 0 
        && (offset !== 0 || (offset === 0 && prevOffset !== 0))) {
        editStatus('Loading...')
        try {
          const { data } = await axios.post('/project2/.netlify/functions/server/spotify/additional', {url: (offset > prevOffset ? items.next : items.previous)})
          getSearchLimited({...data})
        } catch (err) {
          navigate('/error', getError({...err}))
        }
      }
    }
    getNavcurate()
  }, [offset])
  
  const text = (items.length !== 0 && (`
    Showing ${pageNum + items.offset + 1}-${lastNum + items.offset} of ${items.total} results 
    ${((items.tracks.length !== 20) && (items.tracks.length + offset * 20 < items.total)) ? ' (unable to retrieve all tracks)' : ''}
  `))

  return(
    <>
      <CurateResultsDiv status={status}> 
        {(items.length !== 0 && items.tracks.length !== 0 && status === 'Complete') ?
          <>
            <HeaderText> { text } </HeaderText>
            {currentResults.map((track, index) => {
              return(
                <OptionDiv key={index + track.name} selected={track.selected} num={index}>
                  <SimpleTrackDetails type="curateResults" track={track}/>
                </OptionDiv>
              )
            })}
          </>
        :
          <LoadText> { status } </LoadText>
        }
      </CurateResultsDiv> 
    </>
  )
}

export default SearchResults