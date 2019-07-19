import React from "react";
import InputLine from "./InputLine";
import TodoList from "./TodoList";

import axios from "axios";

const dbUrl = "http://localhost:3000/db";

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
    axios
      .post(dbUrl + "/add", { taskText: task, complete: false })
      .then(response => {
        // Do whatever you want with the request's response in here
        console.log(response.data);
        this.setState({ todos: this.state.todos.concat(response.data) });
      })
      .catch(function(error) {
        // Do whatever you want in the event of an error in here
        console.log(error);
      });

    // dummyList.push({ taskText: task, complete: false });
    // console.log(dummyList, task);
    // this.setState({
    //   todos: dummyList
    // });
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
          list={this.state.todos}
          todoXClick={index => this.removeTodo(index)}
          todoToggleClick={index => this.toggleTodo(index)}
        />
      </div>
    );
  }
}

export default TodoApp;
