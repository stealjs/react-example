import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title.jsx';

// Import styles
import './styles.css';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <img src="logo.svg" id="logo"/>
        <Title greeting={this.props.greeting} />
        <ul>
          <li>
            To learn more about StealJS, visit <a href="https://stealjs.com/" target="_blank">
              StealJS.com
            </a>
          </li>
          <li>
            For live help with simple questions, check out <a href="https://www.bitovi.com/community/slack" target="_blank">
              our Slack
            </a>
          </li>
          <li>
            For more complex questions, post to <a href="https://forums.bitovi.com/c/stealjs" target="_blank">
              our forums
            </a>
          </li>
        </ul>
      </div>
    );
  }
};

ReactDOM.render(
  <HelloMessage greeting="Welcome to your first StealJS and React app!" />,
  document.getElementById('app')
);
