import React from "react";
import InputLine from "./InputLine";
import TodoList from "./TodoList";

let dummyList = [
  { taskText: "buy cat food", complete: false },
  { taskText: "go run around", complete: true },
  { taskText: "start schoool", complete: false },
  { taskText: "beg for moneys", complete: false }
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo(task) {
    dummyList.push({ taskText: task, complete: false });
    console.log(dummyList, task);
    this.setState({
      todos: dummyList
    });
  }

  removeTodo(index) {
    dummyList.splice(index, 1);
    console.log("the index is " + index);
    this.setState({
      todos: dummyList
    });
  }

  toggleTodo(index) {
    dummyList[index].complete = !dummyList[index].complete;
    this.setState({
      todos: dummyList
    });
  }

  componentDidMount() {
    this.setState({
      todos: dummyList
    });
  }

  render() {
    return (
      <div>
        <InputLine submit={task => this.addTodo(task)} />
        <TodoList
          list={dummyList}
          todoXClick={index => this.removeTodo(index)}
          todoToggleClick={index => this.toggleTodo(index)}
        />
      </div>
    );
  }
}

export default TodoApp;
