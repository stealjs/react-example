import React from 'react';
import World from './world.jsx!';

let HelloMessage = React.createClass({
  render() {
    return <div>{this.props.name}<World />!</div>;
  }
});

React.render(<HelloMessage name="Hello " />, document.getElementById('app'));
