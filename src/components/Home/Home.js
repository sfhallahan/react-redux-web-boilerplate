import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './styles.css'

Home.propTypes = {
  isItTrue: PropTypes.bool.isRequired,
  toggleValue: PropTypes.func.isRequired,
}

export default function Home (props) {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.pageTitle}>{`Currently it is: ${props.isItTrue}`}</h1>
      <button onClick={props.toggleValue}>{'Toggle'}</button>
    </div>
  )
}
