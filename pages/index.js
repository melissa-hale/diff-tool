import Diff from 'components/Diff'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showForm, setShowForm] = useState(true)
  const [triggerDiff, setTriggerDiff] = useState(false)
  const [v1spaceid, setv1spaceid] = useState('good-vampirebat-UWIpQs26BT')
  const [v1token, setv1token] = useState('056bb771-9859-4a0f-9761-ef2457e2af2a')
  const [v2spaceid, setv2spaceid] = useState(
    'c92be510-cfb2-4175-952d-13152b4a70a4',
  )
  const [v2token, setv2token] = useState('a0ac0f8f-d068-43c8-a280-e7a1470ef3c0')
  const [handle, setHandle] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

  const handleHandle = (e) => {
    e.preventDefault()
    setTriggerDiff(true)
    setHandle(e.target[0].value.toLowerCase())
  }

  const setTriggerFalse = () => {
    setTriggerDiff(false)
  }

  const renderDiff = () => {
    if (!showForm && triggerDiff && handle) {
      let clientDetails = {
        v1spaceid: v1spaceid,
        v1token: v1token,
        v2spaceid: v2spaceid,
        v2token: v2token,
      }

      return (
        <Diff
          handle={handle}
          clientDetails={clientDetails}
          resetTrigger={setTriggerFalse}
        ></Diff>
      )
    } else {
      return
    }
  }

  if (!showForm) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Nacelle Data Comparison Tool</title>
          <meta name="description" content="Nacelle Data Comparison Tool" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h3>Space Details</h3>
          <p>V1 space id: {v1spaceid}</p>
          <p>V1 token: {v1token}</p>
          <p>V2 space id: {v2spaceid}</p>
          <p>V2 token: {v2token}</p>
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <input
              className="submitButton"
              type="submit"
              value="Edit Space Details"
            />
          </form>
        </div>
        <br />
        <br />
        <form
          onSubmit={(e) => {
            handleHandle(e)
          }}
        >
          <label>Handle:</label>
          <input
            name="handle"
            type="text"
            // onChange={(e) => setHandle(e.target.value)}
            // value={handle}
          />
          <input className="submitButton" type="submit" value="Get diff" />
        </form>
        {renderDiff()}
        <main className={styles.main}></main>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Nacelle Data Comparison Tool</title>
          <meta name="description" content="Nacelle Data Comparison Tool" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h3>Space Details</h3>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
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
        <main className={styles.main}></main>
      </div>
    )
  }
}
