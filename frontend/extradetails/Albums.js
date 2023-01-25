import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AlbumNav from './subcomponents/AlbumNav'
import Template from './template/Template'
import usePrevious from '../hooks/usePrevious'
import { getError } from '../functions/getError'

/**
 * TODO - params
 * @param {*} param0 
 * Display album tracks and options.
 */
const Albums = ({album, uri}) => {
  const navigate = useNavigate()
  const trackStart = album.tracks[album.tracks.length - 1].track_number
  const [albumStat, setAlbumStat] = useState('Complete')
  const [page, setPage] = useState(trackStart > 20 ? (trackStart - (trackStart % 20)) / 20 : 0)
  const [updatedTracks, setUpdate] = useState(album.tracks)
  const prevValue = usePrevious({value: page})
  const trackCount = useRef(album.tracks.length)

  /**
   * Hook is prevented from running after initial mount since ref prevValue is initially undefined.
   * The first 20 tracks, defined as album.tracks, was retrieved in another hook and is now stored
   * as the state updatedTracks. 
   * 
   * If total tracks > 20, runs when page state is changed and updates with the next || previous tracks. 
   */

  useEffect(() => {
    const getAlbumPage = async () => {
      setAlbumStat('Loading...')
      try {
        const { data } = await axios.post( '/project2/.netlify/functions/server/spotify/albumtracks', { id: album.id, page })
        setUpdate(data.tracks)
        if (page > prevValue) {
          trackCount.current = trackCount.current + data.tracks.length
        } else {
          trackCount.current = trackCount.current - updatedTracks.length
        }
        setAlbumStat('Complete')
      } catch (err) {
        navigate('/error', getError({...err}))
      }
    }
    if (typeof(prevValue) !== 'undefined') {
      getAlbumPage()
    }
  }, [page])

  return(
    <>
      <Template infoSet={album} infoType="albums" status={albumStat} trackSet={updatedTracks} uri={uri} page={page}>
        {(album.total_tracks > 20 && albumStat === 'Complete') &&
          <AlbumNav maxTracks={trackCount.current < album.total_tracks} page={page} setPage={setPage}/>
        }
      </Template>
    </>
  )
}

export default Albums