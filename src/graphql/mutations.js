import { gql } from '@apollo/react-hooks';

const AUTHORIZE = gql`
  mutation signIn(
    $username: String!
    $password: String!
  ) {
    authorize(credentials: {
      username: $username,
      password: $password
    }) {
      accessToken
    }
  }
`;

export {
  AUTHORIZE
};