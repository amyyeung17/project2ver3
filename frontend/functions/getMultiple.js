const getArtists = (info) => {
  return(
    info.length === 1 ?
      info[0].name
    :
      [...info.map(i => i.name)].reduce((p, c) => p + ', ' + c)
  )
}

const getDate = (releaseDate) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const num = releaseDate.split('-')
  if (num.length === 1) {
    return num[0]
  }
  return months[parseInt(num[1]) - 1] + ' ' + num[2] + ', ' + num[0]
}

const getEmotion = (value) => {
  return Math.round(value * 10)
}

const getEmotionAvg = ({value, type}) => {
  return getEmotion(
    value.length !== 1 ?
      [...value.map(f => f[type])].reduce((p, c) => p + c) / value.length
    :
      value[0][type]
  )
}

const getGenres = (info) => {
  if (info.length === 0) {
    return 'No tagged genres'
  } else if (info.length === 1) {
    return info[0][0].toUpperCase() + info[0].slice(1)
  } else {
    return [...info.map(i => i[0].toUpperCase() + i.slice(1))].reduce((p, c) => p + ', ' + c)
  }
}

const getTime = (duration) => {
  let s = Math.floor((duration % (1000 * 60)) / 1000)
  let min = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
  if (s < 10) {
    s = (s === 0 ? '00' : '0' + s)
  } 

  if (min === 0) {
    min = '00'
  }

  return min + ':' + s 
}


export {
  getArtists,
  getDate,
  getEmotion,
  getEmotionAvg,
  getGenres,
  getTime
}
