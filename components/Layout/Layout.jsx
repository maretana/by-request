import React, { useState } from 'react'
import Header from '../Header'

import styles from './Layout.module.scss'

export default function Layout ({ Component, pageProps }) {
  const [headerText, setHeaderText] = useState('')

  return (
    <div>
      <Header text={headerText} />
      <Component {...pageProps} setHeaderText={setHeaderText} />
    </div>
  )
}
