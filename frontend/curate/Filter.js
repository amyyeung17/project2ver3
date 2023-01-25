import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CurateTextDiv, FilterItemsDiv, GenreDiv } from '../style/CurateStyle'
import { getError } from '../functions/getError'
import FilterItems from './subcomponents/FilterItems'

/**
 * TODO - typedef, arguments for the f(x)
 * @param {{filter: Object<string, boolean>, genres: Array<string>, editFilter: function():void, editGenres: function():void}} params
 */
const Filter = ({filter, genres, editFilter, editGenres}) => {
  const navigate = useNavigate()
  const [options, setOptions] = useState([])

  //Fetch available genres from: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recommendation-genres 
  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await axios.get('/project2/.netlify/functions/server/spotify/genres')
        setOptions(data.genres)
      } catch(err) {
        navigate('/error', getError({...err}))
      }
    }
    getGenres()
  }, [])
  
  return(
    <>
      <CurateTextDiv> Filter by: </CurateTextDiv>
      <FilterItemsDiv>
        <FilterItems items={['track', 'album', 'artist', 'genre']} itemType="filter" checkFun={editFilter} checkState={(op) => filter[op]}/>
      </FilterItemsDiv>
      {filter.genre &&
        <GenreDiv> 
          <FilterItems items={options} itemType="genre" checkFun={editGenres} checkState={(g) => genres.includes(g)}/>
        </GenreDiv>
      }
    </>
  )
}

export default React.memo(Filter)