import gql from 'graphql-tag';

export const topStories = limit => gql`
  {
    hn {
      topStories(limit: ${limit}) {
        id
        title
        url
      }
    }
  }
`;

export const newStories = limit => gql`
{  
  hn {
    newStories(limit: ${limit}) {
      id
      title
      url
      time
    }
  }
}
`;
