import React from 'react'
import { Button, Icon } from '../style/ExtraStyle'

/**
 * Buttons with icons.
 */
const IconTextButton = ({action = () => void 0, color, text, iconType, ...props}) => {
  return(
    <>
      <Button disabled={iconType === 'trash' && props.length} onClick={() => action()} color={color} $iconType={iconType}> 
        <Icon $iconType={iconType}/>
        {text}
      </Button>
    </>
  )
}

export default IconTextButton