import NacelleClient from '@nacelle/client-js-sdk'
import createCompatibilityConnector from '@nacelle/compatibility-connector'

export const v1client = (clientSettings) => {
  const settings = {
    id: clientSettings.v1spaceid,
    token: clientSettings.v1token,
    useStatic: false,
    nacelleEndpoint: 'https://hailfrequency.com/v3/graphql',
  }

  return new NacelleClient(settings)
}

export const v2CCclient = (clientSettings) => {
  const compatibilityConnector = new createCompatibilityConnector({
    endpoint: `https://storefront.api.nacelle.com/graphql/v1/spaces/${clientSettings.v2spaceid}`,
    token: clientSettings.v2token,
    locale: 'en-US',
  })

  return new NacelleClient({
    connector: compatibilityConnector,
  })
}
