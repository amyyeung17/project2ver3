import React from 'react'
import Template from './template/Template'
const Artists = ({artists, uri}) => {
  return(
    <>
      {artists.map((artist) => {
        return(
          <React.Fragment key={artist.id}>
            <Template infoSet={artist} infoType="artists" trackSet={artist.tracks} uri={uri}/>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Artists