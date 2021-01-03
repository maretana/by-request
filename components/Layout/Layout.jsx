import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

// import styles from './Layout.module.scss'

export default function Layout ({ Component, pageProps }) {
  const [headerText, setHeaderText] = useState('')

  return (
    <div>
      <Header text={headerText} />
      <Component {...pageProps} setHeaderText={setHeaderText} />
    </div>
  )
}

Layout.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object
}
