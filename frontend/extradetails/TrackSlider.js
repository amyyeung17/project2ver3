import React from 'react'
import Slider from '../elements/Slider'
import SliderInfo from './subcomponents/SliderInfo'
import { getEmotion } from '../functions/getMultiple'
import * as E from '../style/ExtraDetailStyle'

/**
 * TODO - params
 * 
 * Sliders used to display a track's valence and intensity value on its page. (ExtraDetails.js, path: '/details?).
 * 
 */
const TrackSlider = ({values}) => {
  
  return(
    <>
      <E.MainSliderDiv>
        <Slider type={'extraValence'} value={getEmotion(values[0].valence)}> 
          <SliderInfo type="valence" />
        </Slider>
        <Slider type={'extraIntensity'} value={getEmotion(values[0].energy)}> 
          <SliderInfo type="intensity" />
        </Slider>
      </E.MainSliderDiv>
    </>
  )
}

export default TrackSlider