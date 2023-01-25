import React from 'react'
import IconTextButton from '../../elements/IconTextButton'
import Slider from '../../elements/Slider'
import { InputSectionDiv, InputNavLink } from '../../style/FinalStyle'

const PastEmotion = ({emotionType, emotionValue}) => {
  
  return(
    <>
      <InputSectionDiv>
        <Slider type={'input' + emotionType[0].toUpperCase() + emotionType.slice(1)} value={emotionValue} />
        <InputNavLink to={'/' + emotionType} type="emotion" > 
          <IconTextButton iconType="pencil" color="reverse" text="Edit" />
        </InputNavLink>
      </InputSectionDiv>
    </>
  )
}

export default PastEmotion 