import React from 'react'
import IconTextButton from '../../elements/IconTextButton'
import { AddedIcon, MainText } from '../../style/ExtraDetailStyle'

const AddSeed = ({currentSeed, editMode, editList, seedLength}) => {
  if (editMode) {
    const buttonProps = (
      currentSeed ? 
        {color: 'reverse', iconType: 'dash', text: 'Remove'} 
      : 
        {color: 'main', iconType: 'plus', text: 'Add'}
      )
    return(
      (seedLength < 5 || (currentSeed && seedLength >= 5)) ?
        <IconTextButton {...buttonProps} action={editList} />
      :
        <MainText> Max songs </MainText>
    )
  } else {
    return (
      currentSeed &&
        <>
          <MainText> Added </MainText>
          <AddedIcon />
        </>
    )
  }

}

export default AddSeed