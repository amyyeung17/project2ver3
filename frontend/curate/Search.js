import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import usePrevious from '../hooks/usePrevious'
import SearchResults from './subcomponents/SearchResults'
import SearchInput from './subcomponents/SearchInput'
import SearchNav from './subcomponents/SearchNav'

const Search = () => {
  const { filter, genres, resetOptions } = useOutletContext()
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(0)
  const [status, setStatus] = useState('')
  const prevOffset = usePrevious({value: offset})

  /**
   * Resets all values associated with current search
   * @function resetSearch
   */
  const resetSearch = () => {
    setOffset(0)
    setPage(0)
    setStatus('Loading...')
  }

  /**
   * TODO - any array
   * Checks if the retrieved data returns any results 
   * @function getSearchResults
   * @param {{editedData: Array}} params
   */

  const getSearchResults = ({editedData}) => {
    if (editedData.tracks.length !== 0) {
      setItems(editedData)
      setStatus('Complete')
    } else {
      setStatus('No results. Please try again')
    }
  }

  /**
   * Updates current page accordingly if user tries to navigate to a nonexistent page 
   * due to the next retrieved subset of results is less than 20. Fixes edge case where the total 
   * number of results is different from what is reported by the Spotify API. 
   * @function getSearchLimited
   * @param {{editedData: Array}} params
   */
  const getSearchLimited = ({editedData}) => {
    getSearchResults({editedData})
    if (editedData.tracks.length < 20 
      && (editedData.tracks.length + offset * 20) < parseInt(editedData.total)
      && ((page + offset * 4) * 5) >= editedData.tracks.length + offset * 20) {
        setPage(0)
    }
  }

  return(
    <>
        <SearchInput
          filter={filter}
          genres={genres}
          editStatus={setStatus}
          getSearchResults={getSearchResults}
          resetSearch={resetSearch}
          resetOptions={resetOptions}
        />
        <SearchResults 
          items={items}
          offset={offset}
          page={page}
          prevOffset={prevOffset}
          status={status}
          editStatus={setStatus}
          getSearchLimited={getSearchLimited}
        />
      {(items.length !== 0 && (!status.includes('Please') && !status.includes('Begin'))) &&
        <SearchNav items={items} offset={offset} page={page} setOffset={setOffset} setPage={setPage} />
      }
        
    </>
  )
}

export default Search
