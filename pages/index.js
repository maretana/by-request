import React, { useEffect } from 'react'

export default function Home ({ setHeaderText }) {
  useEffect(() => {
    setHeaderText('')
  }, [])
  return <div>INDEX</div>
}
