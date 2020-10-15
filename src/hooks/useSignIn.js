import { useMutation } from "@apollo/react-hooks";
import { AUTHORIZE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE, {
    onError: error => {
      console.log(error);
    },
  });

  const signIn = async ({ username, password }) => {
    return mutate({
      variables: {
        username,
        password
      }
    });
  };

  return [signIn, result];
};

export default useSignIn;