import Vue from 'vue'

import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";


import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'


const httpLink = new HttpLink({
  uri: "https://graphql-data.herokuapp.com/v1/graphql",
  headers: {
    'x-hasura-admin-secret': 'ilusmdm'
  }
});

const wsLink = new WebSocketLink({
  uri: "wss://graphql-data.herokuapp.com/v1/graphql",
  options: {
    reconnect: true,
    connectionParams() {
      return {
        headers: {
          'x-hasura-admin-secret': 'ilusmdm'
        }
      }
    }
  }
})

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, wsLink, httpLink)



const apolloClient = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
  });
  
  Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $loadingKey: "loading"
    }
  });