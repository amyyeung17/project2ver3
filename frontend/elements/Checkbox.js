import React from 'react'
import { CheckOptionDiv, CheckboxDiv, CheckboxIcon, HiddenCheckbox, StyledCheckbox } from '../style/CurateStyle'

/**
 * Checkboxes used for search filters. 
 */
const Checkbox = ({checked, checkArg, checkFun, type = 'normal'}) => {

  return(
    <>
      <CheckOptionDiv type={type}> 
        <CheckboxDiv>
          <label>
            <HiddenCheckbox checked={checked} onChange={() => checkFun(checkArg)} />
            <StyledCheckbox checked={checked} type={type}>
              <CheckboxIcon viewBox="0 0 24 24">
                <polyline points ="20 6 9 17 4 12"/>
              </CheckboxIcon>
            </StyledCheckbox>
          </label>
        </CheckboxDiv>
        { checkArg } 
      </CheckOptionDiv>
    </>
  )
}

export default React.memo(Checkbox)