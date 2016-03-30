import React from 'react';
import ReactDOM from 'react-dom';
import World from './world.jsx';

let HelloMessage = React.createClass({
  render() {
    return <div>{this.props.name}<World />!</div>;
  }
});

ReactDOM.render(<HelloMessage name="Hello " />, document.getElementById('app'));
