import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button
          type="button"
          onClick={() => {
            this.props.xClick();
          }}
          style={{ marginRight: "10px" }}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        {this.props.completed ? (
          <strike>{this.props.todo}</strike>
        ) : (
          this.props.todo
        )}
        <button type="button" onClick={() => this.props.toggleClick()}>
          Finished
        </button>
      </li>
    );
  }
}

export default Todo;
