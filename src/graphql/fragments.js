import { gql } from 'apollo-boost';

const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerName
    ownerAvatarUrl
    stargazersCount
    reviewCount
    forksCount
    ratingAverage
    description
    language
  }
`;

export {
  REPOSITORY_DETAILS
};