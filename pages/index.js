import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Home ({ setHeaderText }) {
  useEffect(() => {
    setHeaderText('')
  }, [setHeaderText])
  return <div>INDEX</div>
}

Home.propTypes = {
  setHeaderText: PropTypes.func.isRequired
}
