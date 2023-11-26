import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
    this.incriment = this.incriment.bind(this)
    this.decriment = this.decriment.bind(this)
  }

  incriment() {
    this.setState({likes: this.state.likes + 1});
  }

  decriment() {
    this.setState({likes: this.state.likes - 1});
  }

  render() {
    return (
      <div>
        <div>{this.state.likes}</div>
        <button onClick={this.incriment}>Incriment</button>
        <button onClick={this.decriment}>Decriment</button>
      </div>
    );
  }
}

export default ClassCounter
