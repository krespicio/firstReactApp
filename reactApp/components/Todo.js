import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button type="button">X</button>
        {this.props.completed ? (
          <strike>{this.props.todo}</strike>
        ) : (
          this.props.todo
        )}
      </li>
    );
  }
}

export default Todo;
