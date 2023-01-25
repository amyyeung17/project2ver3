import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { SearchBar } from '../../style/CurateStyle'
import { getError } from '../../functions/getError'

const SearchInput = ({filter, genres, editStatus, getSearchResults, resetSearch, resetOptions}) => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const inputTextRef = useRef(input)
  const firstRef = useRef(false)

  //Retrieves the last user input and search preferences 
  useEffect(() => {
    const getPrevInput = async () => {
      try {
        const oldData  = await axios.get('/project2/.netlify/functions/server/prev/filter')
        resetOptions({...oldData.data}) 
        const { data } = await axios.get('/project2/.netlify/functions/server/prev/input')
        if (typeof(data.prevInput) !== 'undefined') {
          setInput(data.prevInput)
          inputTextRef.current = data.prevInput
        }
        
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    getPrevInput()
  }, [])

  /**
   * Handles when users clicks outside of the input field (including navigating away) and considers current search to be finalized.
   * Adds to the past input stack and defocus the input box. 
   */
  useEffect(() => {
    const editPastInputs = async () => {
      if (inputTextRef.current !== '') {
        try {
          await axios.post('/project2/.netlify/functions/server/search/addpastinput', { input: inputTextRef.current })
        } catch(err) {
          navigate('/error', getError({...err}))
        }
      }
    }
    
    const handleOutside = (event) => {
      if (inputRef.current === document.activeElement 
        && !inputRef.current.contains(event.target)) {
          inputRef.current.blur()
          editPastInputs()
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [])
  
  /**
   * Retrieves search data with applied filters as user types from:
   * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
   */
  useEffect(() => {
    if (input === '') {
      editStatus('Begin search for songs by typing in the search bar')
      if (firstRef.current && inputTextRef.current !== '') {
        const clearInput = async () => {
          try {
            await axios.get('/project2/.netlify/functions/server/search/clearinput')
          } catch(err) {
            navigate('/error', getError({...err}))
          }
        }
        clearInput()
      }
    } else if (input.length !== 0 && input.trim().length === 0) {
      editStatus('No results. Please try again')
    } else {
      const getItems = async () => {
        resetSearch()
        try {
          inputTextRef.current = input
          const { data } = await axios.post('/project2/.netlify/functions/server/spotify/search', { filter, genres, input })
          getSearchResults({...data})
        } catch (err) {
          navigate('/error', getError({...err}))
        }
      }
      getItems() 
    }
  }, [input, filter, genres])

  //After mounted, sets ref value to true. Previously set to false to prevent clearInput from firing when component is first mounted with empty input.
  useEffect(() => {
    firstRef.current = true
  }, [])


  return(
    <SearchBar
      ref={inputRef}
      value={input}
      onClick={() => inputRef.current.select()} 
      onChange={(e) => setInput(e.target.value)} 
    /> 
  )
}

export default React.memo(SearchInput)
