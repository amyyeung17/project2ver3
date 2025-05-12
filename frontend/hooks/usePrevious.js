import { useEffect, useRef } from 'react'

const usePrevious = ({value}) => {
  const pastRef = useRef()
  useEffect(() => {
    pastRef.current = value
  }, [value])
  return pastRef.current
}

export default usePrevious