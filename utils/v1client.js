const NacelleClient = require('@nacelle/client-js-sdk').default

const setSettings = (clientSettings) => {
  return {
    id: clientSettings.v1spaceid,
    token: clientSettings.v1token,
    useStatic: false,
    nacelleEndpoint: 'https://hailfrequency.com/v3/graphql',
  }
}

export const getv1Data = (clientSettings, handle) => {
  let settings = setSettings(clientSettings)
  let v1Client = new NacelleClient(settings)
  let v1Data = v1Client.data.content({ handle: handle, type: 'page' })
  return v1Data
}
