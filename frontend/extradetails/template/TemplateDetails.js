import React from 'react'
import { getArtists, getDate, getGenres } from '../../functions/getMultiple'
import Spotify from '../../tracks/Spotify'
import * as E from '../../style/ExtraDetailStyle'
import {  TextSpan } from '../../Shared'

/**
 * TODO - params, removed space from getGenres, wouldn't it make sense for detailsheader to be in aligninfodiv
 *
 * Additional information on the artist(s) and album of the track.
 * Some types of details are determined by the infoType state defined as either 'artists' || 'albums'.
 */

const TemplateDetails = ({infoSet, infoType}) => { 

  const header = (
    infoType === 'albums' ? 
      infoSet.album_type[0].toUpperCase() + infoSet.album_type.slice(1) 
    : 
      'Artist' 
  )

  return(
    <>
      <E.DetailsHeader> { header } </E.DetailsHeader>
      <E.AlignInfoDiv> 
        <E.TitleDiv titleType="small"> 
          <E.TitleSmall> { infoSet.name } </E.TitleSmall>
          <Spotify type="template" track={infoSet} /> 
        </E.TitleDiv>
        {infoType === 'albums' ?
          <>
            <E.Text> Artist(s): <TextSpan> {getArtists(infoSet.artists)}  </TextSpan> </E.Text>
            <E.Text> Release date: <TextSpan> {getDate(infoSet.release_date)} </TextSpan> </E.Text>
          </>
        :
          <E.Text> Genres: <TextSpan> {getGenres(infoSet.genres)} </TextSpan> </E.Text>
        }
      </E.AlignInfoDiv>
    </>
  )
}

export default TemplateDetails