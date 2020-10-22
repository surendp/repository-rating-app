import { useContext } from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";

import AuthStorageContext from "../contexts/AuthStorageContext";
import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHORIZE, {
    onError: error => {
      console.log(error);
    },
  });

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        username,
        password
      }
    });

    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    return { data };
  };

  return [signIn, result];
};

export default useSignIn;