const getIds = (info) => {
  if (typeof(info[0]) === 'string') {
    return(
      info.length === 1 ?
        info[0]
      :
        info.reduce((p, c) => p + ',' + c)
    )  

  } else {
    return(
      info.length === 1 ?
        info[0].id
      :
        [...info.map(i => i.id)].reduce((p, c) => p + ',' + c)
    )  

  }
}

const getUri = ({seed}) => {
  return [...seed.map(s => s.id)]
}

const setPastTracks = ({pastTracks, uri}) => {
  if (pastTracks.length !== 0) {
    const index = pastTracks.indexOf(uri)
    if (index !== -1 && pastTracks.length === 1) {
      return pastTracks
    } else if (index !== -1 && pastTracks.length === 2) {
      return pastTracks.reverse()
    } else if (index !== -1 && pastTracks.length > 2) {
      return [...pastTracks.slice(0, index), ...pastTracks.slice(index + 1), uri]
    } else if (index === -1 && pastTracks.length >= 10) {
      return [...pastTracks.slice(1), uri]
    } else {
      return [...pastTracks, uri]
    }
  } else {
    return [uri]
  }
}

const authorizeToken = ({token}) => {
  const accessFunction = {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    },
    json: true
  }
  return accessFunction
}

const roundEmotion = (value) => {
  return Math.round(value * 10)
}

const roundEmotionAvg = ({value, type}) => {
  return roundEmotion(
    value.length !== 1 ?
      [...value.map(f => f[type])].reduce((p, c) => p + c) / value.length
    :
      value[0][type]
  )
}

const getAlbumUrl = ({id, type, ...props}) => {
  let url = new URL('https://api.spotify.com/v1/albums/' + id + '/tracks') 
  if (type === 'start') {
    const parseTrack = parseInt(props.trackNumber)
    if (parseTrack > 20) {
      url.searchParams.set('offset', parseTrack - (parseTrack % 20))
    }
  } else {
    url.searchParams.set('offset', props.page * 20)
  }
  return url.href
}

const getRecUrl = ({seed, sample = false, ...props}) => {
  let url = new URL('https://api.spotify.com/v1/recommendations')
  url.searchParams.set('market', 'US')
  url.searchParams.set('seed_tracks', getUri({seed}))
  if (sample) {
    url.searchParams.set((props.type === 'valence' ? 'target_valence' : 'target_energy'), (parseInt(props.value) / 10))
    url.searchParams.set('limit', 5)
  } else {
    url.searchParams.set('target_valence', (parseInt(props.emotion['valence']) / 10))
    url.searchParams.set('target_energy', (parseInt(props.emotion['intensity']) / 10))
  }
  return url.href
}

const getSearchUrl = ({filter, genres, input}) => {
  let url = new URL('https://api.spotify.com/v1/search')
  let editedInput = ''
  let searchVal = ''

  Object.entries(filter).forEach(([k, v]) => {
    if (v) {
      if (k !== 'genre') {
        editedInput += (k + ':' + input + ' ')
      } else {
        if (genres.length !== 0) {
          const allGenres = genres.reduce((prev, current) => prev + ' ' + current)
          editedInput += (k + ':' + allGenres)
        }
      }
      searchVal += k + ':'
    }
  })

  if (editedInput.length === 0) {
    editedInput = input
  } else {
    const searches  = searchVal.split(':')
    editedInput = (searches.length === 2 && searches[0] === 'genre' ?
        editedInput += ' track:' + input
      :
        editedInput
      )
  }

  url.searchParams.set('query', editedInput)
  url.searchParams.set('type', ['track'])

  return url.href
}

const getInfoUrls = ({type, ...props}) => {
  let url = ''
  switch(type) {
    case 'artist':
      url = new URL('https://api.spotify.com/v1/artists')
      url.searchParams.set('ids', getIds(props.artists))
      break
    case 'artistTracks':
      url = new URL('https://api.spotify.com/v1/artists/' + props.artistId + '/top-tracks')
      url.searchParams.set('market', 'US')
      break
    case 'genre':
      url = new URL('https://api.spotify.com/v1/recommendations/available-genre-seeds')
      break
    case 'stats':
      url = new URL('https://api.spotify.com/v1/audio-features')
      if (Array.isArray(props.seed)) {
        url.searchParams.set('ids', getUri({seed: props.seed}))
      } else {
        url.searchParams.set('ids', props.seed)
      }
      break
    case 'token':
      url = new URL('https://accounts.spotify.com/api/token')
      break
    case 'tracks':
      url = new URL('https://api.spotify.com/v1/tracks')
      url.searchParams.set('ids', getIds(props.seed))
      url.searchParams.set('market', 'US')
      break
  }

  return url.href
}

module.exports = {
  authorizeToken, 
  roundEmotion,
  roundEmotionAvg,
  getAlbumUrl,
  getRecUrl,
  getSearchUrl,
  getInfoUrls,
  setPastTracks,
  getUri
}