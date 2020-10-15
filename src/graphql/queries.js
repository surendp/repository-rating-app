import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS } from './fragments';

const GET_REPOSITORIES = gql`
  query repositories {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }

  ${REPOSITORY_DETAILS}
`;

export {
  GET_REPOSITORIES
};