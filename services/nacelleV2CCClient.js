import NacelleClient from '@nacelle/client-js-sdk';
import createCompatibilityConnector from '@nacelle/compatibility-connector';

const compatibilityConnector = new createCompatibilityConnector({
  endpoint: process.env.NACELLE_V2_STOREFRONT_ENDPOINT,
  token: process.env.NACELLE_V2_STOREFRONT_TOKEN,
  locale: 'en-US'
});

export default new NacelleClient({
  connector: compatibilityConnector
});