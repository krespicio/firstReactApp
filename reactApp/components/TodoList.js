import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map(task => {
          return <Todo todo={task.taskText} completed={task.complete} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
