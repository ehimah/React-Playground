import React, { Component } from 'react';
import { ItemList } from './graphql/components/ItemList';
import { topStories, newStories } from './graphql/queries/hackernews';
import { fromQuery } from './HoC';

const topStoriesMapDataToProps = ({ hn: { topStories } }) => topStories;

const TopStoriesComponent = fromQuery(
  topStoriesMapDataToProps,
  topStories(20),
  ItemList,
  { title: 'Top Stories', key: 'topStories' }
);

const newStoriesMapDataToProps = ({ hn: { newStories } }) => newStories;
const NewStoriesComponent = fromQuery(
  newStoriesMapDataToProps,
  newStories(15),
  ItemList,
  { title: 'New Stories', key: 'newStories' }
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
