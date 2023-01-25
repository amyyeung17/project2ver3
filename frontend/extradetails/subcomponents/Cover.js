import React from 'react'
import { ImageHolder, Image } from '../../style/ExtraDetailStyle'

const Cover = ({images}) => {

  return (
    <>
      {images.length !== 0 ?
        <Image src={images[1].url} />
        :
        <ImageHolder> No image</ImageHolder>
      }
    </>
  )
}

export default Cover