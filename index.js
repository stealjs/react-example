import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title.jsx';

let HelloMessage = React.createClass({
  render() {
    return (
      <div>
        <Title greeting={this.props.greeting} />
        <ul>
          <li>
            To learn more about StealJS, visit <a href="http://stealjs.com/" target="_blank">
              StealJS.com
            </a>
          </li>
          <li>
            For live help with simple questions, check out <a href="https://gitter.im/stealjs/steal" target="_blank">
              the Gitter chat
            </a>
          </li>
          <li>
            For more complex questions, post to <a href="http://forums.donejs.com/c/stealjs" target="_blank">
              the forum
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<HelloMessage greeting="Welcome to your first StealJS and React app!" />, document.getElementById('app'));
