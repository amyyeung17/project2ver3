import React from 'react'
import { SliderDiv, SliderInput, SliderLabel, SliderTickDiv, SliderTickText } from '../style/ExtraStyle'

/**
 * TODO - params
 * Sliders used to input valence and intensity values in EmotionIntensity.js ('/intensity'), EmotionValence.js ('/valence'), 
 * and ExtraDetails.js ('/details?).
 */

const Slider = ({children, type, value, setValue}) => { 
  const checkType = type.includes('extra') 
  const inputType = type.includes('input')
  const bothType = (checkType || inputType) 

  return(
    <>
      <SliderDiv $checkType={checkType} $inputType={inputType}>
        {bothType &&
          <SliderLabel> {type.slice(5)} </SliderLabel>
        }
        <SliderInput
          $bothType={bothType}
          disabled={bothType}  
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <SliderTickDiv $bothType={bothType}>
          {[...Array(11).keys()].map((num, index) => {
            return(
              <SliderTickText 
                actual={parseInt(value)} 
                key={index + 'tick'}
                $bothType={bothType}
                value={index} 
              > 
                { num } 
              </SliderTickText>
            )
          })}
        </SliderTickDiv>
        {children}
      </SliderDiv>
    </>
  )
}

export default React.memo(Slider)