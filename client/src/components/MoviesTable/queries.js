import { gql } from "apollo-boost";

export const moviesQuery = gql`
  query mmoviesQuery {
    movies {
      id
      name
      genre
      watched
      rate
      director {
        name
      }
    }
  }
`;
