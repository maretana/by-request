import React, { useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import layoutReducer, { initialState } from '../../reducers/layout'
import { SET_HEADER_TEXT } from '../../constants/layoutActions'

// import styles from './Layout.module.scss'

export default function Layout ({ Component, pageProps }) {
  const [layoutState, layoutDispacth] = useReducer(layoutReducer, initialState)
  const setHeaderText = useCallback((headerText) => {
    layoutDispacth({
      type: SET_HEADER_TEXT,
      payload: {
        headerText
      }
    })
  }, [layoutDispacth])

  return (
    <div>
      <Header text={layoutState.headerText} />
      <Component {...pageProps} setHeaderText={setHeaderText} />
    </div>
  )
}

Layout.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object
}
