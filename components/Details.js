import { useState } from 'react'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Details(props) {
  const [spaceDetails, setSpaceDetails] = useState(props.spaceDetails)

  const handleSetSpaceDetails = (e) => {
    e.preventDefault()
    props.showForm()
  }

  return (
    <div className={styles.container}>
      <div>
        <h3>Space Details</h3>
        <p>V1 Space ID: {spaceDetails.v1spaceid}</p>
        <p>V1 Token: {spaceDetails.v1token}</p>
        <p>V2 Space ID: {spaceDetails.v2spaceid}</p>
        <p>V2 Token: {spaceDetails.v2token}</p>
        <form
          onSubmit={(e) => {
            handleSetSpaceDetails(e)
          }}
        >
          <input className="submitButton" type="submit" value="Edit" />
        </form>
      </div>
      <hr></hr>
    </div>
  )
}
