import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getTime } from '../functions/getMultiple'
import * as E from '../style/ExtraDetailStyle'
import { TrackTitleIcon } from '../style/TrackStyle'
import IconTextButton from '../elements/IconTextButton'
import Spotify from '../tracks/Spotify'
import AddSeed from './subcomponents/AddSeed'

/**
 * TODO - params
 * 
 * Header that contains main details of a track and the option to add || remove from seed.
 */
const Main = ({extra, emotion, seed, status, trackState, editSeed}) => {
  const navigate = useNavigate()
  const { duration, from, link, name, explicit, original } = trackState
  const currentSeed = (seed.length !== 0 && extra.length !== 0 && seed.some((track) => (track.id === extra.track.id)))
  const editing = (!emotion['retrievedSeed'] || from.includes('/curate'))

  /**
   * Add track to seed if not selected, else remove. 
   * @function editList 
   */
  const editList = () => {
    editSeed({type: (currentSeed ? 'delete' : 'add'), track: extra.track})
    navigate('/curate/search')
  }

  return(
    <>
      {from === '/details' &&
        <E.MainDiv type="nav"> 
          <E.IconTextLink to={original}> 
            <IconTextButton color="reverse" iconType="arrow-left" text={' Back to ' + original.slice(1)} />
          </E.IconTextLink>
        </E.MainDiv>
      }
      <E.MainDiv type="title"> 
        <E.Title> {name} </E.Title>
        <Spotify type="main" link={link} />  
      </E.MainDiv>
      <E.MainDiv type="info">
        {explicit && <TrackTitleIcon size="big" />}
        <E.TimeIcon explicit={explicit} />
        <E.MainText> { getTime(duration) } </E.MainText>
      </E.MainDiv>
      <E.MainDiv type="options" location={editing}> 
        {status === 'Complete' &&
          <AddSeed 
            currentSeed={currentSeed}
            editMode={editing} 
            editList={editList} 
            seedLength={seed.length}
          />
        }
      </E.MainDiv>
    </>
    
  )
}

export default React.memo(Main)
