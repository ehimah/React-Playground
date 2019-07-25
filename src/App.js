import React, { Component } from 'react';
import { StoryList } from './graphql/components/StoryList';
import { topStories, newStories } from './graphql/queries/hackernews';
import { fromQuery } from './HoC';

const TopStoriesComponent = fromQuery(
  'topStories',
  topStories(20),
  StoryList,
  'Top Stories'
);

const NewStoriesComponent = fromQuery(
  'newStories',
  newStories(15),
  StoryList,
  'New Stories'
);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopStoriesComponent />
        <hr />
        <NewStoriesComponent />
      </React.Fragment>
    );
  }
}

export default App;
