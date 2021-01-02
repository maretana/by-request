import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/Layout'

import '../styles/global.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout pageProps={pageProps} Component={Component} />
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object
}

export default MyApp
