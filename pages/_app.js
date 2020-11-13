import React from 'react'
import Layout from '../components/Layout/Layout'

import '../styles/global.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout pageProps={pageProps} Component={Component} />
  )
}

export default MyApp
