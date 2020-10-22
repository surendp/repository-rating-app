import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
  const { loading, data } = useQuery(GET_AUTHORIZED_USER, {
    onError: error => {
      console.log(error);
    },
    fetchPolicy: "network-only"
  });

  const authorizedUser = loading
    ? undefined
    : data.authorizedUser;

  return {
    loading,
    authorizedUser
  };
};

export default useAuthorizedUser;