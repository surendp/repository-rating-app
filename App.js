import React from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/react-hooks';

import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const App = () => {
  return (
    <NativeRouter>
      <ApolloProvider client={createApolloClient()}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;


