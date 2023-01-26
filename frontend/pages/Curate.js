import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate, Outlet } from 'react-router-dom'
import Filter from '../curate/Filter'
import NavOptions from '../elements/NavOptions'
import NavSubOptions from '../elements/NavSubOptions'
import { getError } from '../functions/getError'
import { LeftDiv, RightDiv, RowDiv, NavDiv } from '../Shared'

/**
 * Page to search and add searched songs as seeds.
 * @param {Object} props - s
 * @param {Array<Object>} props.seed - selected tracks to be used as seed for search
 * @param {function({type})} props.editEmotion - callback function to edit emotion state
 */
const Curate = ({seed, editEmotion}) => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState({track: false, artist: false, album: false, genre: false})
  const [genres, setGenres] = useState([])
  const firstRender = useRef(true)

  /**
   * If component is remounted from navigtion or seed state is updated, check to see if the seed is equivalent to the one stored in cookie-session.
   * 
   * If not, callback function editEmotion to change retrievedSeed status value to false, prompting a refetch of audio features data when 
   * navigating to next component.
   */
  
  useEffect(() => {
    const getUpdateSeed = async () => {
      try {
        const { data } = await axios.post('/project2/.netlify/functions/server/search/updateseed', { seed })
        if (!data.updated) {
          editEmotion({type: 'seed'})
        }
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    if (!firstRender.current) {
      getUpdateSeed()
    }
  }, [seed])

  useEffect(() => {
    firstRender.current = false
  }, [])

  /**
   * Callback function that edits which genres (if genre filter is selected) is being applied to search
   * If genre type is already applied, remove.
   * @param {string} option - genre type
   */
  const editGenres = (option) => {
    setGenres(g => {
      if (g.includes(option)) {
        const removeIndex = g.indexOf(option)
        return (g.filter((_, i) => i !== removeIndex))
      } else {
        return [...g, option]
      }
    })
  };

  /**
   * Callback function that resets filter and genre states to stored data in cookie-session
   * @param {Object<string, boolean>} prevFilter - previously applied filters
   * @param {Array<string>} prevFilter - previously applied genre filters
   */

  const resetOptions = ({prevFilter, prevGenres}) => {
    setGenres(prevGenres)
    setFilter(prevFilter)
  }
  
  return(
    <>
      <RowDiv>
        <LeftDiv>
          <NavSubOptions 
            options={['search', 'selected', 'past']}
            swap={window.location.pathname.split('/')[3]}
          />
          {window.location.pathname.split('/')[3] === 'search' &&
            <Filter filter={filter} genres={genres} editGenres={editGenres} editFilter={(op) => setFilter(f => ({...f, [op]: !f[op]}))} resetOptions={resetOptions} />
          } 
        </LeftDiv>
        <RightDiv> 
          <Outlet context={{filter, genres, resetOptions}} />
        </RightDiv>
      </RowDiv>
      <NavDiv>
        <NavOptions location="/welcome" text="Previous" />
        <NavOptions length={typeof(seed) !== 'undefined' && seed.length} location="/valence" text="Next" />
      </NavDiv>
    </>
  )
}

export default Curate