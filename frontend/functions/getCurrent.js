export default getCurrent = ({items, page}) => {
  let pageNum = (page % 4) * 5
  let lastNum = pageNum + 5
  const currentResults = []
  
  if (items.length !== 0) {
    if (lastNum > items.length) {
      lastNum = items.length
    }
    currentResults.push(...items.slice(pageNum, lastNum))
  }
  return {currentResults, pageNum, lastNum}
}

