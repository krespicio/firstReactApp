import React from "react";

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text"></input>
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            this.props.submit();
          }}
        >
          Add ToDo
        </button>
      </form>
    );
  }
}

export default InputLine;
