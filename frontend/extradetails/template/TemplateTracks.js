import React from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SimpleTrackDetails from '../../tracks/SimpleTrackDetails'
import Disc from '../subcomponents/Disc'
import * as E from '../../style/ExtraDetailStyle'
import { LoadText } from '../../style/ExtraStyle'

/**
 * TODO - params
 * TODO -  num={infoType === 'albums' ? (index === 0 ? index : track.track_number - 1) : index}  
 * 
 * Animated dropdown track display for Template. 
 * Selecting a track (SimpleTrackDetails component) navigates to that track's page.
 * If infoType is 'albums', there are several additional elements if applicable. 
 * This includes the children props (albums with greater than 20 tracks) and disc dividers.
 */
const TemplateTracks = ({children, infoType, show, trackSet, uri, ...props}) => {
  const { state } = useLocation()

  return(
    <>
      <AnimatePresence exitBeforeEnter> 
        {(show && (infoType === 'artists' || props.status === 'Complete')) ?
          <>
            <E.TracksHeader> {infoType === 'albums' ? 'Album tracks' : 'Top tracks'} </E.TracksHeader> 
            <E.TemplateDisplayDiv key={props.page}>  
              {trackSet.map((track, index) => {
                return(
                  <React.Fragment key={track.id}>
                    {(infoType === 'albums' && index !== 0) &&
                      <Disc track={track} />
                    } 
                    <E.TemplateTrackDiv 
                      key={track.id} 
                      num={(infoType === 'albums' && index !== 0) ? track.track_number - 1 : index} 
                      selected={uri === track.id} 
                      type={infoType}
                    >
                      <SimpleTrackDetails num={track.track_number} original={state.original} track={track} type={infoType} uri={uri} />
                    </E.TemplateTrackDiv>
                  </React.Fragment>
                )
              })}
              {children}
            </E.TemplateDisplayDiv>
          </>
        : 
          ((infoType !== 'artists' && props.status !== 'Complete') &&
            <LoadText> {props.status} </LoadText> 
          )
        } 
      </AnimatePresence>
    </>
  )
}

export default React.memo(TemplateTracks)