import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = authStorage => {
  return new ApolloClient({
    uri: Constants.manifest.extra.apolloUrl,
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        operation.setContext({
          header: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });
};

export default createApolloClient;