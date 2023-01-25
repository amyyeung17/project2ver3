import React, { useMemo } from 'react'
import { HeaderDiv, HeaderSubtitle, HeaderTitle } from '../style/ExtraStyle'

const MainHeader = ({location}) => {

  const setText = useMemo(() => {
    switch(location) {
      case '/curate/search':
        return 'Search'
      case '/curate/selected':
        return 'Selected'
      case '/curate/past':
        return 'History'
      case '/valence':
        return 'Valence'
      case '/intensity':
        return 'Intensity'
      case '/final/results':
        return 'Results'
      case '/final/inputs':
        return 'Your inputs'
      case '/details':
        return 'Track Details'
      case '/info':
        return 'Info'
      default:
        return ''
    }
  }, [location])

  
  const setSubtitle = useMemo(() => {
    switch(location) {
      case '/curate/search':
        return 'Select up to 5 tracks that fit your current mood'
      case '/curate/selected':
        return 'Your mood-fitting playlist'
      case '/curate/past':
        return 'Your searches'
      case '/valence':
        return 'How are you feeling?'
      case '/intensity':
        return 'How intense is this feeling?'
      case '/final/results':
        return 'Recommendations based on your inputs'
      case '/final/inputs':
        return 'Check and/or edit your past inputs for new recommendatons'
      case '/details':
        return 'More detailed information on:'
      case '/info':
        return 'Detailed information and credits'
      default:
        return ''
    }
  }, [location])

  return(
    
    <>
      <HeaderDiv location={location}>
        <HeaderTitle> { setText === '' ? <span>&nbsp;&nbsp;</span> : setText } </HeaderTitle>
        <HeaderSubtitle> { setSubtitle === '' ? <span>&nbsp;&nbsp;</span> : setSubtitle } </HeaderSubtitle>
      </HeaderDiv>
    </>
  )
}

export default React.memo(MainHeader)