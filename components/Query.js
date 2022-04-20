import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { getv1datapromise, getv2datapromise } from '../utils/queries'

export default function Query(props) {
  const [handle, setHandle] = useState()
  const [dataType, setDataType] = useState()
  const [contentType, setContentType] = useState()

  const retriveNacelleData = async (e) => {
    e.preventDefault()

    let promises = []
    promises.push(
      getv1datapromise(props.spaceDetails, handle, dataType, contentType),
    )
    promises.push(
      getv2datapromise(props.spaceDetails, handle, dataType, contentType),
    )

    const data = await Promise.all(promises)

    props.setNacelleData({
      handle: handle,
      v1data: data[0],
      v2data: data[1],
    })
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
              onChange={(e) => {
                setDataType(e.target.value)
                setContentType()
              }}
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
              onChange={(e) => {
                setDataType(e.target.value)
                setContentType()
              }}
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
            {dataType === 'content' && (
              <>
                <label> - Type:</label>
                <input
                  required
                  id="contentType"
                  name="contentType"
                  type="text"
                  onChange={(e) => setContentType(e.target.value)}
                  value={contentType ?? ''}
                />
              </>
            )}
          </li>
        </ul>
        <label>Handle:</label>
        <input
          name="handle"
          type="text"
          onChange={(e) => setHandle(e.target.value)}
          value={handle ?? ''}
        />
        <input className="submitButton" type="submit" value="Get diff" />
      </form>
    </div>
  )
}
