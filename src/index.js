import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { HttpLink } from 'apollo-link-http';
let client = new ApolloClient({ uri: 'https://www.graphqlhub.com/graphql' });
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configureStore({ rotating: false })}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
