// const React = require("react");
// const ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

let dummyList = [
  "buy cat food",
  "finish homework",
  "print out assignemtns",
  "call mom"
];

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <button type="button" value="X">
          X
        </button>
        {this.props.todo}
      </li>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map(item => {
          return <Todo todo={item} />;
        })}
      </ul>
    );
  }
}
ReactDOM.render(<TodoList list={dummyList} />, document.getElementById("root"));
