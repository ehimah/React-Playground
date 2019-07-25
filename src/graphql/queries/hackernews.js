import gql from 'graphql-tag';

export const topStories = limit => gql`
  {
    hn {
      topStories(limit: ${limit}) {
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
      title
      url
      time
    }
  }
}
`;
