import React from 'react'
import Checkbox from '../../elements/Checkbox'

const FilterItems = ({items, itemType, checkFun, checkState}) => {
  return(
    <>
      {items.length !== 0 && items.map((i, index) => {
        return(
          <React.Fragment key={i + index}> 
            <Checkbox type={itemType} checked={checkState(i)} checkArg={i} checkFun={checkFun} />
          </React.Fragment>
        )
      })}
    </>
  )
}

export default FilterItems