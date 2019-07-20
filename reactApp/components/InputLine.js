import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ""
    };
  }

  handleTyping(e) {
    console.log("We be changing");
    this.setState({
      typedText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.typedText);
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ""
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.typedText}
          onChange={e => this.handleTyping(e)}
        ></input>
        <button
          type="submit"
          onClick={e => {
            // e.preventDefault();
            // this.props.submit();
            this.handleSubmit(e);
          }}
        >
          <i
            className="fa fa-plus-square"
            aria-hidden="true"
            style={{ marginRight: "5px" }}
          ></i>
          Add ToDo
        </button>
      </form>
    );
  }
}

export default InputLine;
