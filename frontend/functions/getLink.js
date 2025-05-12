
import { createSearchParams } from 'react-router-dom'

const showSong = ({track, location, original}) => {

  return([{
    pathname: '/details',
    search: createSearchParams({
      uri: track.id
    }).toString() 
  },
  {
    state: {duration: track.duration_ms, href: track.href, name: track.name, link: track.external_urls.spotify, explicit: track.explicit, from: location, original}
  }])
}

export default showSong





