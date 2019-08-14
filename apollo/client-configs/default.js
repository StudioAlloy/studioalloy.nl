import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import graphql from '@/static/graphql.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: graphql
})

export default ({ req, app }) => {
  // let headersVal = {
  //   'Accept-Language': app.i18n.locale
  // }
  return {
    httpEndpoint: 'https://api.studioalloy.nl/graphql', errorHandler: '~/plugins/apollo-error-handler.js',
    errorHandler: '@/plugins/apollo-error-handler.js',
    // httpLinkOptions: {
    //   credentials: 'include',
    //   headers: headersVal
    // },
    cache: new InMemoryCache({ fragmentMatcher }),
  }
}