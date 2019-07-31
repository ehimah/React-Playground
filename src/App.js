import React, { Component } from 'react';
import { ItemList } from './graphql/components/ItemList';
import { topStories, newStories } from './graphql/queries/hackernews';
import { fromQuery } from './HoC';
import LoadingSpinner from './redux/components/LoadingSpinner';
import ActionButtons from './redux/components/ActionButtons';
import StateCanvas from './redux/components/StateCanvas';

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
      <div className='container'>
        {/* <TopStoriesComponent />
        <hr />
        <NewStoriesComponent /> */}
        <div className='row align-items-center'>
          <div className='col'>
            <LoadingSpinner />
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col'>
            <ActionButtons />
          </div>
          <div className='col'>
            <StateCanvas />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
