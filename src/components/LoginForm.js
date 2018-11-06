import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }//end of constructor

  handleChange = (event) => {
    this.setState({
      [event.target.value]: event.target.value
    })
  }//end of handleChange

  handleSubmit = (event) => {
    event.preventDefault()
      if(!this.state.username || !this.state.password) {
        return
        this.props.onSubmit(this.state)
      }
  }//end of handleSubmit function

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
