import { useQuery } from "@apollo/react-hooks";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = loading
    ? undefined
    : data.repositories;

  return {
    loading,
    repositories,
  };
};

export default useRepositories;