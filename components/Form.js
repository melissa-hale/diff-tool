import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Form(props) {
  const [v1spaceid, setv1spaceid] = useState('good-vampirebat-UWIpQs26BT')
  const [v1token, setv1token] = useState('056bb771-9859-4a0f-9761-ef2457e2af2a')
  const [v2spaceid, setv2spaceid] = useState(
    'c92be510-cfb2-4175-952d-13152b4a70a4',
  )
  const [v2token, setv2token] = useState('a0ac0f8f-d068-43c8-a280-e7a1470ef3c0')

  const handleSetSpaceDetails = (e) => {
    e.preventDefault()
    let clientDetails = {
      v1spaceid: v1spaceid,
      v1token: v1token,
      v2spaceid: v2spaceid,
      v2token: v2token,
    }
    props.setSpaceDetails(clientDetails)
    props.showForm()
  }

  return (
    <div className={styles.container}>
      <h3>Space Details</h3>
      <form
        onSubmit={(e) => {
          handleSetSpaceDetails(e)
        }}
      >
        <label>V1 Space ID:</label>
        <input
          name="v1spaceid"
          type="text"
          size="50"
          onChange={(e) => setv1spaceid(e.target.value)}
          value={v1spaceid}
        />
        <br /> <br />
        <label>V1 Token:</label>
        <input
          name="v1token"
          type="text"
          size="50"
          onChange={(e) => setv1token(e.target.value)}
          value={v1token}
        />
        <br />
        <br />
        <label>V2 Space ID:</label>
        <input
          name="v2spaceid"
          type="text"
          size="50"
          onChange={(e) => setv2spaceid(e.target.value)}
          value={v2spaceid}
        />
        <br /> <br />
        <label>V2 Token:</label>
        <input
          name="v2token"
          type="text"
          size="50"
          onChange={(e) => setv2token(e.target.value)}
          value={v2token}
        />
        <br />
        <br />
        <input
          className="submitButton"
          type="submit"
          value="Set Space Details"
        />
      </form>
    </div>
  )
}
