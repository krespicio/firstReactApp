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
    console.log(dummyList);
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
        <InputLine submit={() => this.addTodo("Snacker Packer")} />
        <TodoList list={dummyList} />
      </div>
    );
  }
}

export default TodoApp;
