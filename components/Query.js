import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { v1client, v2CCclient } from '../services/clients'

export default function Query(props) {
  const [handle, setHandle] = useState()
  const [dataType, setDataType] = useState()

  const retriveNacelleData = (e) => {
    e.preventDefault()

    const fetchData = async () => {
      if (dataType == 'content') {
        const v1data = await v1client(props.spaceDetails).data.content({
          handle: handle,
          type: 'page',
        })
        const v2data = await v2CCclient(props.spaceDetails).data.content({
          handle: handle,
          type: 'page',
        })
        return [v1data, v2data]
      } else if (dataType == 'product') {
        const v1data = await v1client(props.spaceDetails).data.product({
          handle: handle,
        })
        const v2data = await v2CCclient(props.spaceDetails).data.product({
          handle: handle,
        })
        return [v1data, v2data]
      } else if (dataType == 'collection') {
        const v1data = await v1client(props.spaceDetails).data.collection({
          handle: handle,
        })
        const v2data = await v2CCclient(props.spaceDetails).data.collection({
          handle: handle,
        })
        return [v1data, v2data]
      }
    }

    fetchData().then((nacelleData) =>
      props.setNacelleData({
        handle: handle,
        v1data: nacelleData[0],
        v2data: nacelleData[1],
      }),
    )
  }

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          retriveNacelleData(e)
        }}
      >
        <label>Type: </label>
        <ul className={styles.list}>
          <li>
            <input
              id="product"
              type="radio"
              value="product"
              name="dataType"
              required
              checked={dataType === 'product'}
              onChange={(e) => setDataType(e.target.value)}
            />{' '}
            <label htmlFor="product">Product</label>
          </li>
          <li>
            <input
              id="collection"
              type="radio"
              value="collection"
              name="dataType"
              required
              checked={dataType === 'collection'}
              onChange={(e) => setDataType(e.target.value)}
            />{' '}
            <label htmlFor="collection">Collection</label>
          </li>
          <li>
            <input
              id="content"
              type="radio"
              value="content"
              name="dataType"
              required
              checked={dataType === 'content'}
              onChange={(e) => setDataType(e.target.value)}
            />{' '}
            <label htmlFor="content">Content</label>
          </li>
        </ul>
        <label>Handle:</label>
        <input
          name="handle"
          type="text"
          onChange={(e) => setHandle(e.target.value)}
          value={handle}
        />
        <input className="submitButton" type="submit" value="Get diff" />
      </form>
    </div>
  )
}
