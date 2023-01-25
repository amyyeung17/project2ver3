import React from 'react'
import { NavPageArrow, NavPageOuter } from '../../style/ExtraStyle'


const AlbumNav = ({maxTracks, page, setPage}) => {
  return(
    <>
      <NavPageOuter $both={page === 0} space="albums"> 
        {page !== 0 &&
          <NavPageArrow direction="left" onClick={() => {setPage(p => p - 1)}} />
        }
        {maxTracks &&
          <NavPageArrow direction="right" onClick={() => setPage(p => p + 1)} />
        }
      </NavPageOuter>
    </>
  )
}

export default AlbumNav