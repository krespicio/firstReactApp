import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("this is the props list", this.props.list);
    return (
      <ul>
        {this.props.list.map((task, i) => {
          return (
            <Todo
              key={task._id}
              todo={task.taskText}
              completed={task.complete}
              xClick={() => this.props.todoXClick(task._id)}
              toggleClick={() => this.props.todoToggleClick(task._id)}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
