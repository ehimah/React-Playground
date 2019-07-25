import React from 'react';
import { Query } from 'react-apollo';

export const fromQuery = (key, query, Component, title) =>
  class extends React.Component {
    render() {
      return (
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading...</h1>;
            if (error) return <h1>Error occured while loading...</h1>;
            const { hn } = data;
            return <Component title={title} data={hn[key]} />;
          }}
        </Query>
      );
    }
  };
