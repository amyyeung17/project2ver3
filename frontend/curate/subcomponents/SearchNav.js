import React from 'react'
import NavPage from '../../elements/NavPage'
import { NavPageArrow, NavPageOuter } from '../../style/ExtraStyle'

const SearchNav = ({items, offset, page, setOffset, setPage}) => {
  return (
    <>
      <NavPage 
        items={items.tracks}
        offset={offset} 
        page={page} 
        editPage={setPage}
      >
        <NavPageOuter $both={(items.previous === null) || offset === 0}>
          {((items.previous !== null) && (offset !== 0)) &&
            <NavPageArrow direction="left" onClick={() => setOffset(off => off - 1)} />
          }
          {((items.next !== null) && (items.tracks.length === 20)) &&
            <NavPageArrow direction="right" onClick={() =>  setOffset(off => off + 1)} />
          }
        </NavPageOuter>
      </NavPage>
    </>
  )
}

export default SearchNav