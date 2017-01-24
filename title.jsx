import React from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            greeting: ''
        };
    }
    clicked() {
        const count = this.state.count + 1;
        this.setState({
          greeting: `World Clicked ${count}`,count
        });
    }
    render() {
        return <div>
          <h1 onClick={()=>this.clicked()}>
            {this.props.greeting}
          </h1>
          {
            this.state.count > 0 && (<p>Title clicked {this.state.count} {(this.state.count === 1) ? 'time' : 'times'}</p>)
          }
        </div>;
    }
}
Title.displayName = 'World';
Title.propTypes = {};

export default Title;
