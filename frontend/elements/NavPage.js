import React from 'react'
import { NavPageDiv, NavPageLink } from '../style/ExtraStyle'

const NavPage = ({children, items, offset = 0, page, editPage}) => {
  let temp = 0 

  if (items.length % 5 === 0) {
    temp = items.length
  } else {
    temp = items.length + (5 - items.length % 5)
  }

  return(
    <>
      <NavPageDiv> 
        {items.length > 5 ?
          [...Array(temp / 5)].map((_, index) => {
            return(
              <NavPageLink 
                key={'page' + ((index + (offset * 4)))}
                value={index + (offset * 4)} 
                actual={page + (offset * 4)} 
                onClick={() => editPage(index)}
              > 
                {index + 1 + (offset * 4)} 
              </NavPageLink>
            )
          })
        :
          <NavPageLink num={1} page={1}> 1 </NavPageLink>
        }
      </NavPageDiv>
      {children}
    </>
  )
}

export default React.memo(NavPage)