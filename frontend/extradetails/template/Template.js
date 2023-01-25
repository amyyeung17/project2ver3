import React, { useState } from 'react'
import TemplateDetails from './TemplateDetails'
import Option from '../subcomponents/Option'
import Cover from '../subcomponents/Cover'
import TemplateTracks from './TemplateTracks'
import * as E from '../../style/ExtraDetailStyle'
import { LeftDiv, RightDiv } from '../../Shared'
/**
 * TODO - params, move artists to a separate component
 * TODO - what if image url is just a string
 * Template for artist (ExtraDetails.js) and album (Albums.js) information.
 * Includes TemplateDetails, Option, TemplateTracks components. 
 */
const Template = ({children, infoSet, infoType, trackSet, uri, ...props}) => {
  const [show, setShow] = useState(false)

  return(
    <>
      <E.TemplateDiv infoType={infoType}> 
        <LeftDiv>
          <Cover images={infoSet.images} />
        </LeftDiv>
        <RightDiv type={infoType} albumType={infoType === 'albums' && infoSet.album_type}>
          <TemplateDetails infoSet={infoSet} infoType={infoType} />
          {(!(infoType === 'albums' && infoSet.album_type === 'single')) &&
            <>
              <Option 
                infoType={infoType} 
                totalTracks={infoType === 'albums' && infoSet.total_tracks} 
                show={show} 
                toggleShow={setShow}
              />
              <TemplateTracks
                infoType={infoType}
                page={infoType === 'albums' && props.page}
                show={show} 
                status={props.status}
                trackSet={trackSet} 
                uri={uri}
              >
                {children}
              </TemplateTracks>
            </>
          }
        </RightDiv>
      </E.TemplateDiv>
    </>
  )
}

export default Template