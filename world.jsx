import React from 'react';

class World extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: 'World'
        };
    }
    clicked() {
        const count = this.state.count + 1;
        this.setState({message: `World Clicked ${count}`,count});
    }
    render() {
        const style = {
            display: 'inline-block'
        };
        return <div style={style} onClick={()=>this.clicked()}>{this.state.message}</div>;
    }
}
World.displayName = 'World';
World.propTypes = {};

export default World;
