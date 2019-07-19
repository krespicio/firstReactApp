import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.list.map((task, i) => {
          return (
            <Todo
              todo={task.taskText}
              completed={task.complete}
              xClick={() => this.props.todoXClick(i)}
              toggleClick={() => this.props.todoToggleClick(i)}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
