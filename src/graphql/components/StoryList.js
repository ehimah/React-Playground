import React from 'react';

const Story = props => (
  <ul>
    {
      <li>
        <a href={props.story.url}>{props.story.title}</a>
      </li>
    }
  </ul>
);

export const StoryList = props => (
  <div>
    <h1>{props.title}</h1>
    {props.data.map(story => (
      <Story story={story} />
    ))}
  </div>
);
