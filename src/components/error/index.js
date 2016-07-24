import React from 'react';
import Layout from './layout';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <html>
        <head></head>
        <body>
          <h1>{this.props.message}</h1>
          <h2>{this.props.error.status}</h2>
          <pre>{this.props.error.stack}</pre>
        </body>
      </html>
    );
  }
};
