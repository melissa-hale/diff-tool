import { v1client, v2CCclient } from '../services/clients'

export const getv1datapromise = (
  clientSettings,
  handle,
  dataType,
  contentType,
) => {
  let reqObj
  contentType
    ? (reqObj = { handle: handle, type: contentType })
    : (reqObj = { handle: handle })
  return new Promise((resolve, reject) => {
    v1client(clientSettings)
      .data[dataType](reqObj)
      .then((data) => resolve(data))
      .catch((err) =>
        resolve({
          v1: 'there was a problem fetching from V1, ensure the handle exists',
        }),
      )
  })
}

export const getv2datapromise = (
  clientSettings,
  handle,
  dataType,
  contentType,
) => {
  return new Promise((resolve, reject) => {
    v2CCclient(clientSettings)
      .data[dataType]({
        handle: handle,
      })
      .then((data) => resolve(data))
      .catch((err) =>
        resolve({
          v2: 'there was a problem fetching from V2, ensure the handle exists',
        }),
      )
  })
}
