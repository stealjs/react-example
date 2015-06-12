import React from "react";

let HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}!</div>;
  }
});

React.render(<HelloMessage name="World" />, document.getElementById("app"));
