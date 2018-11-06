import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }

  handleSubmit = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleSubmit} value={this.state.userInput} type="text" />
        {this.props.maxChars - this.state.userInput.length}
      </div>
    );
  }
}

export default TwitterMessage;
