import { useEffect, useRef } from 'react'

export default usePrevious = ({value}) => {
  const pastRef = useRef()
  useEffect(() => {
    pastRef.current = value
  }, [value])
  return pastRef.current
}