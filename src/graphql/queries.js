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

const GET_AUTHORIZED_USER = gql`
  query authorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;

export {
  GET_REPOSITORIES,
  GET_AUTHORIZED_USER
};