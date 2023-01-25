const getError = ({response}) => {
    return(
      typeof(response.data.error) !== 'undefined' ?
        {state: {errorType: 'Spotify', error: response.data.error, status: response.status}}
      :
        {state: {errorType: 'Axios', error: response.statusText, status: response.status}}  
    )
  
}

const getErrorInput = () => {
  return(
    {state: {errorType: 'Client-side', error: 'Missing required inputs', status: 422}}  
  )
}


export {
  getError,
  getErrorInput
}