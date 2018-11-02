import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider as Provider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';

const cacheMem = new InMemoryCache({
  addTypename: false,
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URI,
  clientState: {
    defaults: {},
    resolvers: {
      Query: {},
      Mutation: {},
    },
  },
  cache: cacheMem,
});

ReactDOM.render(
  <Provider client={client}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
