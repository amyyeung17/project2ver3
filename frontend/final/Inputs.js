import React, { useState } from 'react'
import IconTextButton from '../elements/IconTextButton'
import NavSubOptions from '../elements/NavSubOptions'
import PastEmotion from './subcomponents/PastEmotion'
import Songs from './subcomponents/Songs'
import { InputEmotionsDiv, InputNavLink } from '../style/FinalStyle'

/**
 * Display of the inputted songs and values of emotions with options to navigate 
 * and change them.
 */
const Inputs = ({emotion, seed}) => {
  const [swap, setSwap] = useState('inputsSongs')
  return(
    <>
      <NavSubOptions 
        options={['inputsSongs', 'inputsEmotions']}
        swap={swap}
        toggleSwap={setSwap}
      />
      {swap === 'inputsEmotions' ?
        <InputEmotionsDiv>
          <PastEmotion emotionType="valence" emotionValue={emotion['valence']} />
          <PastEmotion emotionType="intensity" emotionValue={emotion['intensity']} />
        </InputEmotionsDiv>
      :
        <>
          <Songs contentLength={seed.length < 2 ? 1 : seed.length} tracks={seed} songType="inputs" />
          <InputNavLink to="/curate" type="curate" > 
            <IconTextButton iconType="pencil" color="reverse" text="Edit" />
          </InputNavLink>  
        </>
      }
      
    </>
  )
}

export default Inputs