import NacelleClient from '@nacelle/client-js-sdk'

const settings = {
  id: process.env.NACELLE_V1_SPACE_ID,
  token: process.env.NACELLE_V1_STOREFRONT_TOKEN,
  useStatic: false,
  nacelleEndpoint: 'https://hailfrequency.com/v3/graphql',
}

export default new NacelleClient(settings)
