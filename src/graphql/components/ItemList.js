import React from 'react';

const Item = props => (
  <ul>
    {
      <li>
        <a href={props.data.url}>{props.data.title}</a>
      </li>
    }
  </ul>
);

export const ItemList = props => (
  <div>
    <h1>{props.title}</h1>
    {props.data !== null &&
      props.data.map(item => <Item key={item.id} data={item} />)}
  </div>
);
